var openMenu=false;

window.onload=function(){
    $("#linkMail").on("click",openMail);
    $(".navbar-toggler-icon").on("click",checkOpenMenu);
}

function openMail(){
    console.log("Stampo");
    window.location.href = "mailto:roberto.bellardi94@gmail.com?subject=Contatto tramite sito " +
        "perdonale&body=";
}

function checkOpenMenu(){
    console.log("Entro");
    if(!openMenu){
        $("#center").css("margin-top","275px");
        openMenu=true;
    }
    else {
        $("#center").css("margin-top", "100px");
        openMenu=false;
    }
}