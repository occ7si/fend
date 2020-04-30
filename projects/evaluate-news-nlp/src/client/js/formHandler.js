export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // TODO: could go to an external API
    fetch('http://localhost:3031/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message;
        console.log('message is: ' + res.message);
    })
}

// export { handleSubmit }
