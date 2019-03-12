$(document).ready(function(){

    $("#search").on("click", function(){
        var searchTerm = $("#searchTerm").val();
        var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            data: function(data, status, jqXHR){
                console.log(data)
            },
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    });
});

/*
GET Request
To search for page titles matching Craig Noone GET Request would be:

api.php?action=query&list=search&srsearch=Craig%20Noone&format=jsonfm [try in ApiSandbox]
It will contain:

http://en.wikipedia.org/w/api.php endpoint which is of English Wikipedia in this case
action=query to fetch data from wiki
list=search to get list of pages matching a criteria
srsearch= along with a page title to search for
format=jsonfm recommended format for output */