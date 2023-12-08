function sendData() {
    const inputData = document.getElementById('inputData').value;
    fetch('https://todo-app-backend-wangroger93.replit.app/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally display a confirmation message in the frontend
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
