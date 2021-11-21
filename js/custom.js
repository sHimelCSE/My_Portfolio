// my portfolio js start
document.getElementById("ui_design_items").style.display = "block";
function openCity(evt, contentId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentId).style.display = "block";
    evt.currentTarget.className += " active";
}

// my portfolio js end
