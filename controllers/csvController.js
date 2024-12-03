const { writeCsv } = require("../helpers/csvHelper");
const { createFolders } = require("../helpers/pathHelper");
const { prisma } = require("../models/prismaClient");
const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: global.process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: global.process.env.AWS_SECRET_ACCESS_KEY,
  region: global.process.env.REGION,
});

const generateCsvFiles = async (
  companyId,
  customPath,
  isInTreeView,
  startRange,
  endRange,
  progressCallback
) => {

  try {
    const departments = await prisma.department.findMany({
      where: { companyId },
    });
    const departmentIds = departments.map((department) => department.id);

    let skip = 0;
    let take = undefined;

    if (startRange && endRange) {
      skip = parseInt(startRange, 10) - 1;
      take = parseInt(endRange, 10) - skip;

      if (isNaN(skip) || isNaN(take) || skip < 0 || take <= 0) {
        throw new Error("Invalid start or end range");
      }
    }

    let geoProjects = await prisma.geo_project.findMany({
      where: { departmentId: { in: departmentIds } },
      skip: skip,
      take: take,
    });

    if (geoProjects.length === 0)
      throw new Error("No projects found for the given companyId");

    const projectIds = geoProjects.map((project) => project.id);

    const geoFiles = await prisma.geo_file.findMany({
      where: { geoProjectId: { in: projectIds } },
    });
    const geoEstimates = await prisma.geo_estimate.findMany({
      where: { geoProjectId: { in: projectIds } },
    });

    if (geoFiles.length === 0 || geoEstimates.length === 0) {
      throw new Error("No data found for the given companyId");
    }

    const totalSteps = geoProjects.length * 3 + 1; // 3 steps per project (project, files, estimates) + 1 for root CSV generation
    let currentStep = 0;

    const updateProgress = () => {
      currentStep++;
      const percent = Math.round((currentStep / totalSteps) * 100);
      if (progressCallback) progressCallback(percent);
    };

    const baseFolderPath = await createFolders(
      customPath,
      `company_${companyId?.toString()}`
    );
    if (isInTreeView) {
      await createRootCsv(geoProjects, geoFiles, geoEstimates, baseFolderPath);
      updateProgress();
    } else {
      for (const geoProject of geoProjects) {
        await createProjectCsv(
          geoProject,
          geoFiles,
          geoEstimates,
          baseFolderPath,
          updateProgress
        );
      }
    }

    return `CSV files generated successfully PATH : ${baseFolderPath}`;
  } catch (error) {
    throw error;
  }
};
const createRootCsv = async (
  geoProjects,
  geoFiles,
  geoEstimates,
  baseFolderPath
) => {
  const geoAnnotations = await prisma.geo_annotation.findMany({
    where: { geoEstimateId: { in: geoEstimates.map((o) => o.id) } },
  });
  const geoRows = await prisma.geo_annotation_row.findMany({
    where: { geoAnnotationId: { in: geoAnnotations.map((ann) => ann.id) } },
  });
  const geoScales = await prisma.geo_scale.findMany({
    where: { geoEstimateId: { in: geoEstimates.map((o) => o.id) } },
  });

  await writeCsv(
    baseFolderPath,
    "project.csv",
    [geoProjects],
    [
      { id: "id", title: "ID" },
      { id: "departmentId", title: "Depertment Id" },
      { id: "projectNumber", title: "Project Number" },
      { id: "name", title: "Name" },
      { id: "address1", title: "Address 1" },
      { id: "address2", title: "Address 2" },
      { id: "postCode", title: "Postcode" },
      { id: "webhook", title: "Webhook" },
      { id: "city", title: "City" },
      { id: "country", title: "Country" },
      { id: "deleted", title: "Deleted" },
      { id: "geoClientId", title: "Client Id" },
      { id: "projectLeaderId", title: "Project Leader Id" },
      { id: "currency", title: "Currency" },
      { id: "units", title: "Units" },
      { id: "createdAt", title: "Created At" },
      { id: "g5", title: "G5" },
      { id: "estimateOrder", title: "Estimate Order" },
    ]
  );
  const projectFiles = geoFiles.map((file) => ({
    ...file,
    URL: `${global.process.env.FILE_URL}/${file.id}`,
  }));
  await writeCsv(baseFolderPath, "files.csv", projectFiles, [
    { id: "id", title: "ID" },
    { id: "geoProjectId", title: "Project ID" },
    { id: "parentId", title: "Parent Id" },
    { id: "name", title: "Name" },
    { id: "fileVersion", title: "Version" },
    { id: "type", title: "Type" },
    { id: "size", title: "Size" },
    { id: "added", title: "Added" },
    { id: "pages", title: "Pages" },
    { id: "lastTiled", title: "Last Tiled" },
    { id: "description", title: "Description" },
    { id: "shortDescription", title: "Short Description" },
    { id: "rotation", title: "Rotation" },
    { id: "converted", title: "Converted" },
    { id: "status", title: "Status" },
    { id: "nodeStatus", title: "Node Status" },
    { id: "URL", title: "URL" },
  ]);

  await writeCsv(
    baseFolderPath,
    "estimate.csv",
    [geoEstimates],
    [
      { id: "id", title: "Estimate ID" },
      { id: "geoProjectId", title: "Project ID" },
      { id: "name", title: "Estimate Name" },
      { id: "status", title: "Status" },
      { id: "createdAt", title: "Created At" },
      { id: "updatedAt", title: "Updated At" },
    ]
  );

  await writeCsv(baseFolderPath, `annotations.csv`, geoAnnotations, [
    { id: "id", title: "ID" },
    { id: "geoEstimateId", title: "Geo Estimate ID" },
    { id: "fileId", title: "File Id" },
    { id: "controlFolderId", title: "Control Folder Id" },
    { id: "layerId", title: "Layer Id" },
    { id: "parentId", title: "Parent Id" },
    { id: "annotationId", title: "Annotation Id" },
    { id: "name", title: "Name" },
    { id: "number", title: "Number" },
    { id: "xfdf", title: "XFDF" },
    { id: "type", title: "Type" },
    { id: "height", title: "Height" },
    { id: "quantity", title: "Quantity" },
    { id: "indexPosition", title: "Index Position" },
    { id: "labels", title: "Labels" },
  ]);

  await writeCsv(baseFolderPath, `rows.csv`, geoRows, [
    { id: "id", title: "ID" },
    { id: "geoAnnotationId", title: "Annotation ID" },
    { id: "annotationRow", title: "Data" },
  ]);

  await writeCsv(baseFolderPath, `scales.csv`, geoScales, [
    { id: "id", title: "ID" },
    { id: "geoEstimateId", title: "Estimate ID" },
    { id: "fileId", title: "File Id" },
    { id: "page", title: "Page" },
    { id: "xdf", title: "XDF" },
    { id: "type", title: "Type" },
    { id: "length", title: "Length" },
    { id: "labels", title: "Labels" },
  ]);

  for (const file of projectFiles) {
    const filePath = path.join(baseFolderPath);

    await downloadFile(file, filePath);
  }
};

const createProjectCsv = async (
  geoProject,
  geoFiles,
  geoEstimates,
  baseFolderPath,
  updateProgress
) => {
  const projectFolder = await createFolders(
    baseFolderPath,
    `project_${geoProject.id}`
  );

  await writeCsv(
    projectFolder,
    "project.csv",
    [geoProject],
    [
      { id: "id", title: "ID" },
      { id: "departmentId", title: "Depertment Id" },
      { id: "projectNumber", title: "Project Number" },
      { id: "name", title: "Name" },
      { id: "address1", title: "Address 1" },
      { id: "address2", title: "Address 2" },
      { id: "postCode", title: "Postcode" },
      { id: "webhook", title: "Webhook" },
      { id: "city", title: "City" },
      { id: "country", title: "Country" },
      { id: "deleted", title: "Deleted" },
      { id: "geoClientId", title: "Client Id" },
      { id: "projectLeaderId", title: "Project Leader Id" },
      { id: "currency", title: "Currency" },
      { id: "units", title: "Units" },
      { id: "createdAt", title: "Created At" },
      { id: "g5", title: "G5" },
      { id: "estimateOrder", title: "Estimate Order" },
    ]
  );
  updateProgress();

  const projectFiles = geoFiles
    .filter((file) => file.geoProjectId === geoProject.id)
    .map((file) => ({
      ...file,
      URL: `${global.process.env.FILE_URL}/${file.id}`,
    }));
  await writeCsv(projectFolder, "files.csv", projectFiles, [
    { id: "id", title: "ID" },
    { id: "geoProjectId", title: "Project ID" },
    { id: "parentId", title: "Parent Id" },
    { id: "name", title: "Name" },
    { id: "fileVersion", title: "Version" },
    { id: "type", title: "Type" },
    { id: "size", title: "Size" },
    { id: "added", title: "Added" },
    { id: "pages", title: "Pages" },
    { id: "lastTiled", title: "Last Tiled" },
    { id: "description", title: "Description" },
    { id: "shortDescription", title: "Short Description" },
    { id: "rotation", title: "Rotation" },
    { id: "converted", title: "Converted" },
    { id: "status", title: "Status" },
    { id: "nodeStatus", title: "Node Status" },
    { id: "URL", title: "URL" },
  ]);
  updateProgress();

  for (const file of projectFiles) {
    const filePath = path.join(projectFolder);

    await downloadFile(file, filePath);
  }

  for (const geoEstimate of geoEstimates.filter(
    (estimate) => estimate.geoProjectId === geoProject.id
  )) {
    await createEstimateCsv(geoEstimate, projectFolder);
    updateProgress();
  }
};

const createEstimateCsv = async (geoEstimate, projectFolder) => {
  const estimateFolder = await createFolders(
    projectFolder,
    `estimate_${geoEstimate.id}`
  );

  await writeCsv(
    estimateFolder,
    "estimate.csv",
    [geoEstimate],
    [
      { id: "id", title: "Estimate ID" },
      { id: "geoProjectId", title: "Project ID" },
      { id: "name", title: "Estimate Name" },
      { id: "status", title: "Status" },
      { id: "createdAt", title: "Created At" },
      { id: "updatedAt", title: "Updated At" },
    ]
  );

  const geoAnnotations = await prisma.geo_annotation.findMany({
    where: { geoEstimateId: geoEstimate.id },
  });
  const geoRows = await prisma.geo_annotation_row.findMany({
    where: { geoAnnotationId: { in: geoAnnotations.map((ann) => ann.id) } },
  });
  const geoScales = await prisma.geo_scale.findMany({
    where: { geoEstimateId: geoEstimate.id },
  });

  await writeCsv(estimateFolder, `annotations.csv`, geoAnnotations, [
    { id: "id", title: "ID" },
    { id: "geoEstimateId", title: "Geo Estimate ID" },
    { id: "fileId", title: "File Id" },
    { id: "controlFolderId", title: "Control Folder Id" },
    { id: "layerId", title: "Layer Id" },
    { id: "parentId", title: "Parent Id" },
    { id: "annotationId", title: "Annotation Id" },
    { id: "name", title: "Name" },
    { id: "number", title: "Number" },
    { id: "xfdf", title: "XFDF" },
    { id: "type", title: "Type" },
    { id: "height", title: "Height" },
    { id: "quantity", title: "Quantity" },
    { id: "indexPosition", title: "Index Position" },
    { id: "labels", title: "Labels" },
  ]);

  await writeCsv(estimateFolder, `rows.csv`, geoRows, [
    { id: "id", title: "ID" },
    { id: "geoAnnotationId", title: "Annotation ID" },
    { id: "annotationRow", title: "Data" },
  ]);

  await writeCsv(estimateFolder, `scales.csv`, geoScales, [
    { id: "id", title: "ID" },
    { id: "geoEstimateId", title: "Estimate ID" },
    { id: "fileId", title: "File Id" },
    { id: "page", title: "Page" },
    { id: "xdf", title: "XDF" },
    { id: "type", title: "Type" },
    { id: "length", title: "Length" },
    { id: "labels", title: "Labels" },
  ]);
};
const downloadFile = async (file, downloadPath) => {
  const { id, type, name, geoEstimateId } = file;
  const params = {
    Bucket: String(global.process.env.MAIN_BUCKET),
    Key: String(id),
  };

  try {
    const data = await s3.getObject(params).promise();
    const fileName = `${name}.${type || "pdf"}`;
    const filePath = path.join(downloadPath, fileName);
    fs.writeFileSync(filePath, data.Body);
  } catch (error) {

  }
};

const fetchAllData = async (companyId, startRange, endRange, progressCallback) => {
  try {
    const departments = await prisma.department.findMany({ where: { companyId } });
    const departmentIds = departments.map(department => department.id);

    let skip = 0;
    let take = undefined;

    if (startRange && endRange) {
      skip = parseInt(startRange, 10) - 1;
      take = parseInt(endRange, 10) - skip;

      if (isNaN(skip) || isNaN(take) || skip < 0 || take <= 0) {
        throw new Error("Invalid start or end range");
      }
    }

    let geoProjects = await prisma.geo_project.findMany({
      where: { departmentId: { in: departmentIds } },
      skip: skip,
      take: take
    });

    if (geoProjects.length === 0) throw new Error("No projects found for the given companyId");

    const projectIds = geoProjects.map(project => project.id);

    const geoFiles = await prisma.geo_file.findMany({ where: { geoProjectId: { in: projectIds } } });
    const geoEstimates = await prisma.geo_estimate.findMany({ where: { geoProjectId: { in: projectIds } } });
    const geoAnnotations = await prisma.geo_annotation.findMany({ where: { geoEstimateId: { in: geoEstimates.map(e => e.id) } } });

    const totalSteps = geoProjects.length * 3 + 1;
    let currentStep = 0;

    const updateProgress = () => {
      currentStep++;
      const percent = Math.round((currentStep / totalSteps) * 100);
      if (progressCallback) progressCallback(percent);
    };

    // Fetch and encode files as base64
    const encodedFiles = await Promise.all(geoFiles.map(async (file) => {
      const params = {
        Bucket: String(global.process.env.MAIN_BUCKET),
        Key: String(file.id),
      };
      try {
        const data = await s3.getObject(params).promise();
        const base64File = data.Body.toString("base64");

        const annotations = geoAnnotations.filter(annotation => annotation.fileId === file.id);

        return { ...file, base64File, annotations };
      } catch (error) {
        return { ...file, base64File: null, annotations: [] };
      }
    }));

    updateProgress(); // Call this function at appropriate places in your code

    return { geoProjects, geoFiles: encodedFiles, geoEstimates, geoAnnotations };
  } catch (error) {
    throw error;
  }
};

module.exports = { generateCsvFiles, fetchAllData };
