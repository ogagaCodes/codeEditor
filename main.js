/*if (typeof jQuery == ""){
    alert("no jquery herr bro");
} else {
    alert("jquery here");
} */

   function updateArea(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" 
    + $("#cssArea").val()
     + "</style></head><body>"
     + $("#htmlArea").val() 
     + "</body></html>" );
   
      document.getElementById("outputArea").contentWindow.eval($("#javascriptArea").val()); 
   }
$(".navItems").hover(function(){
    $(this).css("background-color", "rgba(12, 11, 235, 1)");
}, function() {
    $(this).css("background-color", "#D3D3D3");
});


$(".navItems").click(function(){
   let areaId = $(this).attr("id") + "Area";
     $("#" + areaId).toggleClass("hidden");

     let numberOfActiveAreas = 5 - $('.hidden').length;
     $(".panel").width(($(window).width() / numberOfActiveAreas) - 10);
})

$(".panel").width(($(window).width() / 2)- 10);
$("iframe").contents().find("html").html($("#htmlArea").val());
  updateArea();
$("textarea").on('change keyup paste', function(){
    updateArea();
});

$("#consoleBtn").click(function(){
    $("#consolePanel").toggle("fast");
});