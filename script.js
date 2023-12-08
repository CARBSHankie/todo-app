function sendData() {
    const inputData = document.getElementById('inputData').value;
    fetch('https://todo-app-backend-wangroger93.replit.app/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        document.getElementById('responseOutput').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
}
