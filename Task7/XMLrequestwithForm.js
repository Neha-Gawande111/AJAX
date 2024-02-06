const form = document.getElementById("myForm");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission

            const formData = new FormData(form); // Create a FormData object

            const xhr = new XMLHttpRequest();

            xhr.open("POST", "your_server_endpoint_here", true);
            // Replace "your_server_endpoint_here" with the actual server endpoint URL

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // Request was successful, handle the response here
                        console.log("Form data sent successfully!");
                        // document.write("Form data sent successfully!")
                    } else {
                        // Request failed, handle errors here
                        console.error("Form data submission failed");
                        // document.write("Form data submission failed")
                    }
                }
            };

            // Send the FormData object to the server
            xhr.send(formData);
        });