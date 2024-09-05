import { calculateSimilarity } from "./calculateSimilarity.js";
import axios from "axios"
// Function to check plagiarism between two projects
async function downloadFile(url) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return response.data;
}

function checkPlagiarism(project1, project2) {
    let existingProjectFile, newProjectFile;
    
    async()=>{
        existingProjectFile = await downloadFile(project1.file);
        newProjectFile = await downloadFile(project2.file);
    }
   
    console.log("Existing project file : ", existingProjectFile);
    const similarityOverview = calculateSimilarity(project1.overview, project2.overview);
    const similarityReportFile = calculateSimilarity(existingProjectFile, newProjectFile);

    // You can adjust these weights based on the importance of different fields
    const weightOverview = 0.7;
    const weightReportFile = 0.3;

    // Calculate weighted average similarity
    const weightedSimilarity = (similarityOverview * weightOverview) + (similarityReportFile * weightReportFile);

    return weightedSimilarity;
}

export { checkPlagiarism };
