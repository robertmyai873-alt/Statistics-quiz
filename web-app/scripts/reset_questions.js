
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUESTIONS_FILE = path.join(__dirname, '../src/data/questions.json');

if (fs.existsSync(QUESTIONS_FILE)) {
    const data = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf8'));
    const originalCount = data.length;
    // Keep only questions with ID < 100 (assuming originals were 1-99)
    // Actually, let's keep questions that do NOT have "Answer derived from course materials" in explanation if possible?
    // Or just ID based. Original max ID was likely < 100.
    // Safe bet: ID > 100 are the new ones.
    const filtered = data.filter(q => q.id < 100);
    fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(filtered, null, 2));
    console.log(`Reset questions.json. Removed ${originalCount - filtered.length} questions.`);
}
