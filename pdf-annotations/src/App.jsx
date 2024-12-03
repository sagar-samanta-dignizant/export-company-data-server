import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

const App = () => {
  const viewerRef = useRef(null);
  const instanceRef = useRef(null);

  // Example annotations array with xfdf property
  const annotations = [
    {
      id: 4062727,
      geoEstimateId: 51750,
      fileId: 294577,
      layerId: "-1",
      parentId: null,
      annotationId: "fb76e3a2-3909-0c32-fcb2-c913c5df6161",
      name: "Klinker wc/d VT",
      number: "013",
      xfdf: '<?xml version="1.0" encoding="UTF-8"?><xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve"><annots><polygon page="0" rect="418.083014,206.052818,509.632003,284.115006" color="#5ab14a" flags="print" name="fb76e3a2-3909-0c32-fcb2-c913c5df6161" title="1818" subject="Polygon" date="D:20190918122354+02\'00\'" annotationName="Klinker wc/d VT" annotationNumber="013" annotationHeight="2.5" geometraOpacity="0.5" interior-color="#5ab14a" width="0.45" creationdate="D:20190918122343+02\'00\'" showNumber="false" showName="false" showArea="false" showNetArea="false" showLength="false" showLengths="false" showNetLength="false" showVolume="false" showNetVolume="false" showWall="false" showTotalWall="false" showTotalNetWall="false" showVariables="false" turnOffFill="false" showReduction="false" formulaNA="" formulaNL="" formulaNVO="" formulaNV=""><vertices>508.96,206.5;509.18,283.22;418.53,283.67;418.98,255.36;443.52,255.14;466.29,233.03;466.51,207.17;508.96,206.5</vertices></polygon></annots><pages><defmtx matrix="1,0,0,-1,0,1191"/></pages></xfdf>',
      type: "Polygon",
      height: "2.5",
      quantity: 1,
      indexPosition: null,
      labels: null,
      controlFolderId: null,
    },
    {
      id: 4062741,
      geoEstimateId: 51750,
      fileId: 294577,
      layerId: "-1",
      parentId: null,
      annotationId: "9c7711da-9cea-87d8-7f52-b83abbb836c0",
      name: "Klinker (s) Bastu VT",
      number: "014",
      xfdf: '<?xml version="1.0" encoding="UTF-8"?><xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve"><annots><polygon page="0" rect="418.3,206.488761,464.31,253.38" color="#5AB14A" flags="print" name="9c7711da-9cea-87d8-7f52-b83abbb836c0" title="1818" subject="Polygon" date="D:20190918122525+02\'00\'" annotationName="Klinker (s) Bastu VT" annotationNumber="014" annotationHeight="2.5" geometraOpacity="0.5" interior-color="#5AB14A" width="0.45" creationdate="D:20190918122410+02\'00\'" showNumber="false" showName="false" showArea="false" showNetArea="false" showLength="false" showLengths="false" showNetLength="false" showVolume="false" showNetVolume="false" showWall="false" showTotalWall="false" showTotalNetWall="false" showVariables="false" turnOffFill="false" showReduction="false" formulaNA="" formulaNL="-0.6" formulaNVO="" formulaNV=""><vertices>418.76,206.94;418.75,252.49;442.85,252.93;463.86,232.37;463.86,207.17;418.76,206.94</vertices></polygon></annots><pages><defmtx matrix="1,0,0,-1,0,1191"/></pages></xfdf>',
      type: "Polygon",
      height: "2.5",
      quantity: 1,
      indexPosition: null,
      labels: null,
      controlFolderId: null,
    },
  ];

  useEffect(() => {
    if (!viewerRef.current || instanceRef.current) return; // Ensure only one WebViewer instance is initialized

    WebViewer(
      {
        path: "/webviewer", // Path to WebViewer's lib folder (adjust if needed)
        initialDoc: "/dummy.pdf", // Load dummy.pdf from the public folder
        licenseKey:
          "Rukkor AB:OEM:Geometra::B+:AMS(20260604):B9B6BF03B61CA35809994E616F7F4DF2D3F13F427DFA9F873E8E4AB431F5C7", // Add your license key
      },
      viewerRef.current
    ).then((instance) => {
      instanceRef.current = instance;
      const { documentViewer, annotationManager } = instance.Core;

      documentViewer.addEventListener("documentLoaded", async () => {
        // Import annotations from xfdf array
        for (const annotation of annotations) {
          await annotationManager.importAnnotations(annotation.xfdf);
        }
      });
    });

    return () => {
      instanceRef.current = null; // Cleanup instance on unmount
    };
  }, []);

  // Function to merge annotations and download the PDF
  const downloadPDF = async () => {
    const instance = instanceRef.current;
    const { documentViewer, annotationManager } = instance.Core;

    // Ensure annotations are merged into the PDF
    const xfdfString = await annotationManager.exportAnnotations();
    const doc = documentViewer.getDocument();
    const data = await doc.getFileData({ xfdfString });

    // Create a Blob from the file data
    const blob = new Blob([new Uint8Array(data)], { type: "application/pdf" });

    // Create a download link for the PDF
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "annotated.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>
      <button onClick={downloadPDF} style={{ marginTop: "10px" }}>
        Download PDF with Annotations
      </button>
      <div
        ref={viewerRef}
        style={{ height: "600px", width: "100%", border: "1px solid black", opacity: 0 }}
      ></div>
    </div>
  );
};

export default App;
