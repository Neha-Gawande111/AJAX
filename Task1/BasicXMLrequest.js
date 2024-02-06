function LoadData()
        {
            var Xhttp=new XMLHttpRequest();
                Xhttp.onreadystatechange=function()
                {
                if(this.readyState==4&&this.status==200)
                    {
                     document.getElementById("btn").innerHTML=this.responseText;
                     
                    }
                };

                Xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
                Xhttp.send();
        };