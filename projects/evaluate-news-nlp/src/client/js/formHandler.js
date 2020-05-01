
export function handleSubmit(event) {
    event.preventDefault();

    // Client.checkForName(formText)

    console.log("::: Form Submitted :::");    

    fetch('http://localhost:3031/getAylienObj')
    .then (function(res) {
        console.dir(res);
        // const response = await res.json();
        let outputText = document.getElementById('results');
        outputText.innerHTML = res.polarity;
    })

    //     res.sentiment({
    //         'text' : 'John is a very good football player!'
    //     }, function(error, response) {
    //         if (error === null) {
    //             console.log(response);
    //         }
    //     });
    // });
}


    // getAylienObj();
    // requestAylienData();
    // .then((data) => {
    //     let outputText = document.getElementById('results');
    //     outputText.innerHTML = data;
    // })

    // TODO: could go to an external API
    // fetch('http://localhost:3031/test')
    // fetch(BASE_URL + ZIP + API_KEY)
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = JSON.stringify(res);
    //     console.log('message is: ' + JSON.stringify(res));
    // })


// function getAylienObj() {
//     fetch('http://localhost:3031/getAylienObj')
//     .then (function(res) {
//         console.dir(res);
//         res.sentiment({
//             'text' : 'John is a very good football player!'
//         }, function(error, response) {
//             if (error === null) {
//                 console.log(response);
//             } else {
//                 console.log(error);
//             }
//         });
//     })
// }

// function requestAylienData() {
//     console.log('inside makeCall');
//     fetch('/analyzeText')
//     .then(function(res) {
//         console.dir(res);
//         document.getElementById('results').innerHTML = JSON.stringify(res);
//     })
// };

// export { handleSubmit }
