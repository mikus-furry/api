const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const baseUrl = "https://raw.githubusercontent.com/mikus-furry/api.github.oi/main/assets/img/";

    const folderPath = path.join(process.cwd(), 'assets/img/kiss/');

    const results = [];

    const walkDirectory = (dirPath) => {
        const files = fs.readdirSync(dirPath);
        files.forEach((file) => {
            const fullPath = path.join(dirPath, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walkDirectory(fullPath);
            } else if (file.match(/\.(png|jpg|jpeg|gif)$/)) {
                const imageUrl = baseUrl + path.relative(folderPath, fullPath).replace(/\\/g, "/");
                results.push({ "url": imageUrl });
            }
        });
    };

    walkDirectory(folderPath);

    res.status(200).json({ results });
};
