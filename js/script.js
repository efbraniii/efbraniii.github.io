$(function(){

  var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(".navbar-collapse a").click(function(){
  $(".navbar-collapse").collapse('hide');
});
});

