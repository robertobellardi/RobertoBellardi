window.onload=function(){
    $("#linkMail").on("click",openMail);
}

function openMail(){
    console.log("Stampo");
    window.location.href = "mailto:roberto.bellardi94@gmail.com?subject=Contatto tramite sito " +
        "perdonale&body=";
}