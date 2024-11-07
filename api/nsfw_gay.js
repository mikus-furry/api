const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const baseUrl = "https://raw.githubusercontent.com/mikus-furry/api.github.oi/main/assets/img/";

    // Список папок, з яких ти хочеш брати зображення
    const folders = ['nsfw1', 'nsfw2', 'nsfw3', 'nsfw4'];  // Можеш додати інші папки тут

    const results = [];

    // Обхід кожної папки та збір зображень
    folders.forEach(folder => {
        const folderPath = path.join(process.cwd(), 'assets/img', folder);  // Шлях до папки

        const walkDirectory = (dirPath) => {
            const files = fs.readdirSync(dirPath);
            files.forEach((file) => {
                const fullPath = path.join(dirPath, file);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    walkDirectory(fullPath);  // Рекурсивний обхід папок
                } else if (file.match(/\.(png|jpg|jpeg|gif)$/)) {  // Перевірка на зображення
                    const imageUrl = baseUrl + path.relative(folderPath, fullPath).replace(/\\/g, "/");
                    results.push({ "url": imageUrl });
                }
            });
        };

        walkDirectory(folderPath);
    });

    // Повертаємо зображення у форматі JSON
    res.status(200).json({ results });
};
