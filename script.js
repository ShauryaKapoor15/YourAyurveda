function showMessage() {
  let message = "Welcome to your Ayurveda!"; // local variable

  alert( message );
}

showMessage(); // Welcome to your ayurveda!



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headersmall").style.fontSize = "30px";
  } else {
    document.getElementById("headersmall").style.fontSize = "100px";
    document.getElementById("headersmall").style.position = "fixed";
    document.getElementById("headersmall").style.top = "0";
    document.getElementById("headersmall").style.left = "0";
  }
}



