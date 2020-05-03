export function showErrorMsg(errorMsg) {
    // Remove old text content
    const results = document.getElementById('results');
    results.innerHTML = '';

    // Display error message
    const error = document.getElementById('errorMsg');
    error.innerHTML = errorMsg;
    error.style.color = '#f00';
}

export function resetErrorMsg() {
    const error = document.getElementById('errorMsg');
    error.innerHTML = '';
}