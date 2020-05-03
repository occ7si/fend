export function displaySentimentAnalysis(aylienResponse) {
    const outputTextContainer = document.getElementById('results');
    let sentimentPolarity = document.getElementById('sentimentPolarity');
    let confidenceScore = document.getElementById('confidenceScore');
    let entityType = document.getElementById('entityType');

    // Create sentimentPolarity element in view if not available
    if (sentimentPolarity === null) {
        sentimentPolarity = document.createElement('p');
        sentimentPolarity.id = 'sentimentPolarity';
        outputTextContainer.appendChild(sentimentPolarity);
    }

    // Create confidenceScore element in view if not available
    if (confidenceScore === null) {
        confidenceScore = document.createElement('p');
        confidenceScore.id = 'confidenceScore';
        outputTextContainer.appendChild(confidenceScore);
    }

    // Create entityType element in view if not available
    if (entityType === null) {
        entityType = document.createElement('p');
        entityType.id = 'entityType';
        outputTextContainer.appendChild(entityType);
    }

    // Update view with new data
    sentimentPolarity.innerHTML = `Sentiment Polarity: ${aylienResponse.polarity}`;
    confidenceScore.innerHTML = `Polarity Confidence Score: ${aylienResponse.polarity_confidence}`;
    entityType.innerHTML = `Subjectivity: ${aylienResponse.subjectivity}`;
}