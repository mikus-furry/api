const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const baseUrl = "https://raw.githubusercontent.com/mikus-furry/api.github.oi/main/assets/img/";

    // Отримуємо параметр category з запиту
    const category = req.params.category; 

    // Перевіряємо, чи був переданий параметр
    if (!category) {
        return res.status(400).json({ error: "Category is required" });
    }

    const folderPath = path.join(process.cwd(), 'assets/img', category);

    const results = [];

    const walkDirectory = (dirPath) => {
        const files = fs.readdirSync(dirPath);
        files.forEach((file) => {
            const fullPath = path.join(dirPath, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walkDirectory(fullPath); // Рекурсивно проходимо підкаталоги
            } else if (file.match(/\.(png|jpg|jpeg|gif)$/)) {
                const imageUrl = baseUrl + path.relative(folderPath, fullPath).replace(/\\/g, "/");
                results.push({ "url": imageUrl });
            }
        });
    };

    // Перевіряємо, чи існує така категорія
    if (fs.existsSync(folderPath)) {
        walkDirectory(folderPath); // Проходимо по всіх файлах папки
        res.status(200).json({ results }); // Відправляємо результати
    } else {
        res.status(404).json({ error: "Category not found" }); // Якщо папка не знайдена
    }
};
