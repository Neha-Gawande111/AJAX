const output = document.getElementById('output');
const fetchButton = document.getElementById('fetch-button');
const postButton = document.getElementById('post-button');

fetchButton.addEventListener('click', fetchData);
postButton.addEventListener('click', sendData);

function displayError(message) {
    output.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

function fetchData() {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                output.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
            } else {
                displayError('Failed to fetch data');
            }
        };
        xhr.onerror = function () {
            displayError('Network error');
        };
        xhr.send();
    } catch (error) {
        displayError('An error occurred while fetching data.');
    }
}

function sendData() {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        const data = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        xhr.onload = function () {
            if (xhr.status === 201) {
                const response = JSON.parse(xhr.responseText);
                output.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
            } else {
                displayError('Failed to send data');
            }
        };

        xhr.onerror = function () {
            displayError('Network error');
        };

        xhr.send(JSON.stringify(data));
    } catch (error) {
        displayError('An error occurred while sending data.');
    }
}