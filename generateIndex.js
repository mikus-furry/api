 api[category].js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { category } = req.query;

     Завантажуємо index.json
    const indexPath = path.join(process.cwd(), 'assets', 'img', 'index.json');
    const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

     Перевіряємо, чи існує категорія
    if (!indexData[category]) {
        return res.status(404).json({ error Категорію не знайдено });
    }

     Вибираємо випадкове зображення
    const images = indexData[category];
    const randomImage = images[Math.floor(Math.random()  images.length)];

    res.status(200).json({
        results [
            {
                url randomImage
            }
        ]
    });
}
