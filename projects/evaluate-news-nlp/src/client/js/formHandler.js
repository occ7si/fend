
export function handleSubmit(event) {
    event.preventDefault();

    // Client.checkForName(formText)

    console.log("::: Form Submitted :::");

    const userinput = document.getElementById('name').value;
    console.log(userinput);
    console.log(JSON.stringify(userinput));
    const userResponse = {userinput: userinput};

    fetch('http://localhost:3031/addUserInput', {
        method: 'POST',
        credential: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userResponse)
    })
    .then (res => res.json())
    .then (function(res) {
        console.dir(res);
        const outputText = document.getElementById('results');
        outputText.innerHTML = res.polarity;
    })
}