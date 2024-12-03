const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');

const writeCsv = async (folderPath, fileName, data, headers) => {
    const filePath = path.join(folderPath, `${fileName}.csv`);
    const csvWriter = createCsvWriter({
        path: filePath,
        header: headers
    });
    await csvWriter.writeRecords(data);
};

module.exports = { writeCsv };
