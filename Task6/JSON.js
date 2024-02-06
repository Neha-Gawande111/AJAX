// Function to fetch JSON data from the API
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

// Function to filter data by a condition (e.g., user ID)
function filterData(data, userId) {
    return data.filter(item => item.userId === userId);
}

// Function to update the UI with the modified data
function updateUI(data) {
    const dataList = document.getElementById('data-list');

    // Clear the existing list
    dataList.innerHTML = '';

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${item.title}, Body: ${item.body}`;
        dataList.appendChild(listItem);
    });
}

// Fetch and manipulate the data
const userId = 1; // Example user ID for filtering
fetchData()
    .then(data => filterData(data, userId))
    .then(filteredData => updateUI(filteredData))
    .catch(error => console.error(error));