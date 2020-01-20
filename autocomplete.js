$("#htmlArea").on('change eyup paste', function() {
    let inputVal = $("#htmlArea").val();
    if(inputVal === "<p"){
        $("#htmlArea").contents.find("html").html("<p></p>");
    }
})