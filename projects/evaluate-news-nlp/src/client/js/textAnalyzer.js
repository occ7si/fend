const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: "75e40e8e",
    application_key: "4a9028ed186468f5cfd0a85fbf11783f"
    // application_id: process.env.API_ID,
    // application_key: process.env.API_KEY
});


// export function analyzeText() {
//     analyzeSentiment();
// }

export function analyzeSentiment(formText) {

    
    console.log('inside analyzeSentiment');
    // textapi.sentiment.text = formText, function(err, res) {
    //     if (err === null) {
    //         console.log(res);
    //     }

    textapi.sentiment({
        'text': 'John is a very good football player!'
    }, function(error, response) {
        if (error === null) {
            console.log(response);
        }
        console.log('my error is: ' + error);
    });
}