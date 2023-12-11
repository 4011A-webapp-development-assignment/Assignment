function readMore() { //Inspired by code by w3schools: https://www.w3schools.com/howto/howto_js_read_more.asp
    var ellipsis = document.getElementById("ellipsis");
    var showRest = document.getElementById("showMore");
    var btnShow = document.getElementById("readMoreBtn");
  
    if (ellipsis.style.display === "none") {
        ellipsis.style.display = "inline";
        btnShow.innerHTML = "Read More";
      showRest.style.display = "none";
    } else {
        ellipsis.style.display = "none";
        btnShow.innerHTML = "Read Less";
      showRest.style.display = "inline";
    }
  }