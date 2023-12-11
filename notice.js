let webNotice = document.createElement("p");
webNotice.style.cssText = "color: red; text-align: right";
webNotice.textContent = "Notice: Want to know more? Check out the UN Goals!";
let sectionNotice = document.querySelector("section");
sectionNotice.parentNode.insertBefore(webNotice, sectionNotice);