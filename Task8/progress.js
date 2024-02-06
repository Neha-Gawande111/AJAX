        const progressBar = document.getElementById("progress");
        const fileInput = document.getElementById("fileInput");
        const uploadButton = document.getElementById("uploadButton");

        uploadButton.addEventListener("click", () => {
            const file = fileInput.files[0];

            if (file) {
                const xhr = new XMLHttpRequest();

                xhr.open("POST", "your_upload_endpoint_here", true);
                // Replace "your_upload_endpoint_here" with the actual server endpoint URL

                xhr.upload.onprogress = function (e) {
                    if (e.lengthComputable) {
                        const percent = (e.loaded / e.total) * 100;
                        progressBar.value = percent;
                    }
                };

                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // Request was successful, handle the response here
                        console.log("File uploaded successfully!");
                    } else {
                        // Request failed, handle errors here
                        console.error("File upload failed");
                    }
                };

                const formData = new FormData();
                formData.append("file", file);
                xhr.send(formData);
            }
        });