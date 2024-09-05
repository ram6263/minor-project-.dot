import {Project} from "../../models/project.model.js" // Import your Project model
import {checkPlagiarism} from "./plagarismChecker.js" // Import your plagiarism checker module

// Function to check plagiarism for a new project
async function checkPlagiarismForProject(newProject) {
    try {
        // Retrieve existing projects from the database
        const existingProjects = await Project.find({_id : {$ne : newProject._id}});
        // Calculate similarity score for each existing project
        const similarityScores = existingProjects.map(existingProject => {

            const similarityScore = checkPlagiarism(
                existingProject,
                newProject
            );
            console.log("Similarity score : ", similarityScore)
            return similarityScore;
        });

        // Aggregate similarity scores
        const totalSimilarityScore = similarityScores.reduce((acc, score) => acc + score, 0);
        console.log("Total similarity : ", totalSimilarityScore)
        // Calculate threshold (you can define your own logic)
        const threshold = totalSimilarityScore / similarityScores.length;
        console.log("Threshold : ", threshold)
        // Determine plagiarism status based on threshold
        const plagiarismStatus = threshold > 80 ? 1 : 0;
        console.log("Plagiarism status : ", plagiarismStatus)
        return plagiarismStatus;
    } catch (error) {
        console.error('Error checking plagiarism:', error);
        return -1; // Return an error code
    }
}

export { checkPlagiarismForProject };
