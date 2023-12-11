let webNotice = document.createElement("p");
webNotice.setAttribute("id","webNotice");
webNotice.textContent = "Notice: Want to know more? Check out the UN Goals!";
let sectionNotice = document.querySelector("section");
sectionNotice.parentNode.insertBefore(webNotice, sectionNotice);