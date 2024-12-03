const express = require('express');
const http = require('http');
const fs = require('fs');
const socketIo = require('socket.io');
const { generateCsvFiles, fetchAllData } = require('./controllers/csvController');
const multer = require("multer");
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser'); 
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

global.io = io;

app.use(cors({
    origin: "*"
})); 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/download', async (req, res) => {
    const companyId = parseInt(req.body.companyId);
    const customPath = req.body.customPath;
    const isInTreeView = req.body.isChecked;
    const startRange = req.body.startRange || null;
    const endRange = req.body.endRange || null;

    if (isNaN(companyId)) {
        return res.status(400).send("Invalid Company ID");
    }

    if (!customPath || !fs.existsSync(customPath)) {
        return res.status(400).send("Invalid path or path does not exist.");
    }

    isProcessing = true;
    io.emit('status', { message: 'CSV generation in progress...' });

    try {
        const result = await generateCsvFiles(companyId, customPath, isInTreeView, startRange, endRange, (percent) => {
            io.emit('progress', { percent });
        });
        isProcessing = false;
        io.emit('status', { message: 'CSV generation completed!' });

        res.send(result);
    } catch (error) {
        console.error(error);
        isProcessing = false;
        io.emit('status', { message: 'An error occurred while processing the request.' });
        res.status(500).send("An error occurred while processing the request.");
    }
});

app.post('/fetch-data', async (req, res) => {
    const companyId = parseInt(req.body.companyId);
    const customPath = req.body.customPath;
    const isInTreeView = req.body.isChecked;
    const startRange = req.body.startRange || null;
    const endRange = req.body.endRange || null;

    if (isNaN(companyId)) {
        return res.status(400).send("Invalid Company ID");
    }

    if (!customPath || !fs.existsSync(customPath)) {
        return res.status(400).send("Invalid path or path does not exist.");
    }
    try {
        const result = await fetchAllData(companyId, customPath, isInTreeView, startRange, endRange);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing the request.");
    }
});

app.post("/upload", upload.single("file"), (req, res) => {
    const { path: filePath, customPath } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).send("No file uploaded.");
    }
    io.emit('status', { message: `Uploading start:${file.originalname}` });

    let fullPath = path.join(customPath, filePath);
    const dir = path.dirname(fullPath);

    if (!path.extname(fullPath)) {
        fullPath += '.pdf';
    }

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFile(fullPath, file.buffer, (err) => {
        if (err) {
            return res.status(500).send("Error saving file.");
        }
        io.emit('status', { message: `Upload end:${file.originalname}` });
        res.send("File uploaded successfully.");
    });
});

app.post('/fetch-all-data', async (req, res) => {
    const companyId = parseInt(req.body.companyId);
    const startRange = req.body.startRange || null;
    const endRange = req.body.endRange || null;

    if (isNaN(companyId)) {
        return res.status(400).send("Invalid Company ID");
    }

    try {
        io.emit('status', { message: 'Company data fetching start' });
        const result = await fetchAllData(companyId, startRange, endRange);
        io.emit('status', { message: 'Fetching company data end' });
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing the request.");
    }
});

// WebSocket connection
io.on('connection', (socket) => {
    console.log('A client connected');
    io.emit('status', { message: 'Socket connected' });

    // When a client disconnects, log it
    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

server.listen(process.env.API_PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.API_PORT || 8080}`);
});
