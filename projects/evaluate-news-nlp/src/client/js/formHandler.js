const API_KEY = '&appid=f12f38bf85fd07d6898ede03b27230fa';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const ZIP = '98001';

export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // TODO: could go to an external API
    // fetch('http://localhost:3031/test')
    fetch(BASE_URL + ZIP + API_KEY)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = JSON.stringify(res);
        console.log('message is: ' + JSON.stringify(res));
    })
}

// export { handleSubmit }
