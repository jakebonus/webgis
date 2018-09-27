var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("img-slide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 1000);
}


function myFunction() {
  $("#iframe2").attr("src", function(index, attr){ 
  return attr;
});
}


function myFunction1() {
  $("#iframe2").attr("src", function(index, attr){ 
  return attr;
});
}