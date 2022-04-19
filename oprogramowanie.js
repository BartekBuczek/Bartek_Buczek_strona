window.onload = function(){
    blokimenu();
}

function blokimenu(){
    blokimenu = "";
    
    for (let iloscblokow = 0; iloscblokow < 5; iloscblokow++) {
        blokimenu += "<th id='" +  iloscblokow + "' style='left:"+ (iloscblokow*20) +"%;'></th>";
    }
    var menuu = document.getElementById("tabela");
    menuu.innerHTML += blokimenu;
    var glowna = document.getElementById("0");
    glowna.innerHTML += "<a href='https://bartekbuczekbazadanych.tk/'>Strona główna</a>"
    var aktualnosci = document.getElementById("1");
    aktualnosci.innerHTML += "<a href='https://bartekbuczekbazadanych.tk/'>Aktualności</a>"
    var mojedane = document.getElementById("3");
    mojedane.innerHTML += "<a href='https://bartekbuczekbazadanych.tk/'>Moja baza danych</a>"
    var profil = document.getElementById("2");
    profil.innerHTML += "<a href='https://bartekbuczekbazadanych.tk/'>Profil</a>"
    var logowanie = document.getElementById("4");
    logowanie.innerHTML += "<a href='https://bartekbuczekbazadanych.tk/'>Logowanie</a>"
}
