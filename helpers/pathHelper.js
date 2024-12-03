const fs = require('fs');
const path = require('path');

const createFolders = async (basePath, folderName) => {
    const folderPath = path.join(basePath, folderName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    return folderPath;
};

module.exports = { createFolders };
