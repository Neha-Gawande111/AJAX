$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        dataType: 'json',
        success: function(data){
            var table = '<table>';
            table += '<tr><th>ID</th><th>Title</th><th>Body</th></tr>';
            // console.log(table);    
            $.each(data, function(index,item){
                table += '<tr>';
                // console.log(table);
                table +='<td>' + item.id + '</td>';
                // console.log(table);
                table +='<td>' + item.title + '</td>';
                // console.log(table);
                table +='<td>' + item.body + '</td>';
                // console.log(table);
                table += '<tr>';
                
            });
            table +='</table>'
            //we are appending in the div data-container
            $('#data-container').html(table);  
        },
        error: function(){
            $('#data-container').html('<p>Error fetching data.</p>');
        }
    });
});