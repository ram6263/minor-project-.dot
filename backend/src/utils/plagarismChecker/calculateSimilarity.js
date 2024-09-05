import natural from "natural"
const tfidf = new natural.TfIdf();

// Function to calculate cosine similarity between two text documents
function calculateSimilarity(doc1, doc2) {
    // Tokenize and add documents to the TF-IDF model
    tfidf.addDocument(doc1);
    tfidf.addDocument(doc2);

    // Get TF-IDF vector representation for both documents
    const vec1 = tfidf.listTerms(0);
    const vec2 = tfidf.listTerms(1);

    // Calculate dot product
    let dotProduct = 0;
    for (let i = 0; i < vec1.length; i++) {
        for (let j = 0; j < vec2.length; j++) {
            if (vec1[i].term === vec2[j].term) {
                dotProduct += vec1[i].tfidf * vec2[j].tfidf;
                break;
            }
        }
    }

    // Calculate magnitudes
    let magnitude1 = 0;
    for (let i = 0; i < vec1.length; i++) {
        magnitude1 += vec1[i].tfidf * vec1[i].tfidf;
    }
    magnitude1 = Math.sqrt(magnitude1);

    let magnitude2 = 0;
    for (let i = 0; i < vec2.length; i++) {
        magnitude2 += vec2[i].tfidf * vec2[i].tfidf;
    }
    magnitude2 = Math.sqrt(magnitude2);

    // Calculate cosine similarity
    const similarity = dotProduct / (magnitude1 * magnitude2);

    return similarity;
}

export { calculateSimilarity };
