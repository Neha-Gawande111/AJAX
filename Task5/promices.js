// Function to make an XMLHttpRequest and return a Promise
function makeRequest(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open("GET", url, true);
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Request failed with status: ${xhr.status}`));
        }
      };
  
      xhr.onerror = () => {
        reject(new Error("Request failed"));
      };
  
      xhr.send();
    });
  }
  
  // URLs for the requests
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  
  // An array to store the Promises for each request
  const requests = [];
  
  // Make asynchronous requests for each URL
  for (const url of urls) {
    requests.push(makeRequest(url));
  }
  
  // Process the responses independently when all requests are complete
  Promise.all(requests)
    .then((responses) => {
      // Responses will be an array with the data from each request
      console.log("All responses have been received:");
      for (const response of responses) {
        console.log(response);
        document.write(response);
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      document.write("An error occurred:", error);
    });