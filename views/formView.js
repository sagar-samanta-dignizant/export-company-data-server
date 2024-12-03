module.exports = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download CSV</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f7fa;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background-color: #ffffff;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                padding: 30px;
                border-radius: 8px;
                width: 100%;
                max-width: 400px;
            }
            h1 {
                font-size: 24px;
                color: #333;
                text-align: center;
                margin-bottom: 20px;
            }
            label {
                font-size: 14px;
                color: #555;
                margin-bottom: 5px;
                display: block;
            }
            input[type="text"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 14px;
                color: #333;
            }
            input[type="text"]:focus {
                border-color: #007BFF;
                outline: none;
            }
            input[type="checkbox"] {
                margin-right: 10px;
            }
            button {
                width: 100%;
                padding: 12px;
                background-color: #007BFF;
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #0056b3;
            }
            .form-group {
                margin-bottom: 20px;
            }
            .note {
                font-size: 12px;
                color: #888;
                text-align: center;
                margin-top: 10px;
            }
            .status-message {
                font-size: 16px;
                color: #007BFF;
                text-align: center;
                margin-top: 20px;
            }
            .checkbox-group {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            .progress-bar {
                width: 100%;
                background-color: #f3f3f3;
                border-radius: 5px;
                overflow: hidden;
                margin-top: 20px;
            }
            .progress-bar-inner {
                height: 20px;
                width: 0;
                background-color: #007BFF;
                text-align: center;
                color: white;
                line-height: 20px;
                transition: width 0.3s;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Download CSV</h1>
            <form action="/download" method="POST">
                <div class="form-group">
                    <label for="companyId">Company ID:</label>
                    <input type="text" id="companyId" name="companyId" required placeholder="Enter Company ID">
                </div>
                <div class="form-group">
                    <label for="customPath">Custom Path (e.g., D:/path):</label>
                    <input type="text" id="customPath" name="customPath" required placeholder="Enter Custom Path">
                </div>
                <div class="form-group">
                    <label for="startRange">Start Range:</label>
                    <input type="text" id="startRange" name="startRange" required placeholder="Enter Start Range">
                </div>
                <div class="form-group">
                    <label for="endRange">End Range:</label>
                    <input type="text" id="endRange" name="endRange" required placeholder="Enter End Range">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="isChecked" name="isChecked">
                    <label for="isChecked">Folder View</label>
                </div>
                <button type="submit">Download CSV</button>
            </form>
            <div class="note">
                <p>Note: Make sure the custom path exists and is writable.</p>
            </div>
            <div class="status-message" id="statusMessage"></div>
            <div class="progress-bar">
                <div class="progress-bar-inner" id="progressBar">0%</div>
            </div>
        </div>

        <!-- Include Socket.io -->
        <script src="/socket.io/socket.io.js"></script>
        <script>
            const socket = io(); // Connect to the server's WebSocket

            // Listen for status updates
            socket.on('status', (data) => {
                const statusMessageElement = document.getElementById('statusMessage');
                statusMessageElement.textContent = data.message;
            });

            // Listen for progress updates
            socket.on('progress', (data) => {
                const progressBarElement = document.getElementById('progressBar');
                progressBarElement.style.width = data.percent + '%';
                progressBarElement.textContent = data.percent + '%';
            });
        </script>
    </body>
</html>
`;
