
import definitions from '../data/definitions.json';
import questions from '../data/questions.json';

const getQuestionsByModule = () => {
    const modules = {};
    const mockExamKey = "M. Practice Exam Questions";

    // Initialize/Collect modules dynamically or predefined
    // Since we have fixed modules in the data now, we can group dynamically

    // We want to ensure specific order if possible, or just gather them
    // The user data has "Module 1: ...", "Module 2: ..."

    questions.forEach(q => {
        const modName = q.module || "Uncategorized";
        if (!modules[modName]) {
            modules[modName] = [];
        }
        modules[modName].push(q);
    });

    return modules;
};

export const getModules = () => {
    return getQuestionsByModule();
};

export const getAllQuestions = () => {
    return questions;
};

export const getExamParts = () => {
    const allQuestions = questions;
    const totalQuestions = allQuestions.length;
    const partsCount = 10;
    const batchSize = Math.ceil(totalQuestions / partsCount);

    const parts = [];
    for (let i = 0; i < partsCount; i++) {
        const start = i * batchSize;
        const end = start + batchSize;
        parts.push(allQuestions.slice(start, end));
    }
    return parts;
};
