let recupEmail = document.querySelector("#email");
let recupMessage = document.querySelector("#message");
let recupNom = document.querySelector("#nom");
let bouton = document.querySelector('#bouton');



recup(recupEmail, recupMessage, recupNom);







function verifForm(f){
    let mailOk = verifMail(f.recupEmail);
    let messageOk = verifMessage(f.recupMessage);
    let nomOk = verifNom(f.recupNom);

    if(mailOk && messageOk && nomOk){
        return true;        
    }
    else{
        alert('Veuillez remplir correctement tous les champs.');
    }
    
}






function recup(recupE, recupM, recupN){
    recupE.onblur =() =>{
        verifMail(recupE);
    }
    recupM.onblur =()=>{
        verifMessage(recupM);
    }
    recupN.onblur =()=>{
        verifNom(recupN);
    }
}


function surligne(champ, erreur){
    if(erreur){
        
        champ.style.backgroundColor = "#fba";
    }
    else{
        champ.style.backgroundColor = "";
    }
}


function verifMail(champ){
    let regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;    
    if(!regex.test(champ.value)){
        surligne(champ, true);
        return false;                        
    }
    else{
        surligne(champ, false);
        return true;
    }
        
}

function verifNom(champ){
    let regex = /^[a-zA-Z0-9._-\s']{1,}$/;
    if(!regex.test(champ.value)){
        surligne(champ, true);
        return false;
    }
    else{
        surligne(champ, false);
        return true;
    }
}

function verifMessage(champ){
    let regex = /^[a-zA-Z0-9._-\s'()?!:;,]{5,}$/;
    if(!regex.test(champ.value)){
        surligne(champ, true);
        return false;
    }
    else{
        surligne(champ, false);
        return true;
    }
}



bouton.addEventListener('click',
console.log("ca marche !")
);
  

