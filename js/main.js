var menubtn= document.querySelector(".checkbtn");
var menubtnx= document.querySelector(".close");
menubtn.onclick = function(){
    var menu= document.querySelector(".navmenu");
    menu.classList.toggle("navmenu-active");
    // alert("hi")
}
menubtnx.onclick = function(){
    var menu= document.querySelector(".navmenu");
    menu.classList.toggle("navmenu-active");
    // alert("hi")
}

var sidebarbtn= document.querySelector(".menu-icon");
var sidebarbtnx= document.querySelector(".sidebar-close");
sidebarbtn.onclick = function(){
    var menu= document.querySelector(".sidebar");
    menu.classList.toggle("sidebar-active");
    // alert("hi")
}
sidebarbtnx.onclick = function(){
    var menu= document.querySelector(".sidebar");
    menu.classList.toggle("sidebar-active");
    // alert("hi")
}