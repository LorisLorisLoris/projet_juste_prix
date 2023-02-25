// Etape 1 - Sélectionner nos éléments

let input   = document.querySelector("#prix");
let error   = document.querySelector("small");
let form    = document.querySelector("#formulaire");

// Etape 2 - Cacher l'erreur

error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

let randomNumber = Math.floor(Math.random() * Math.floor(1000));
let tries = 0;
let numberInsert; 

// Etape 6 - Créer la fonction vérifier
function verify(number){
  let info = document.createElement("div");
  
  if(number < randomNumber ){
    info.textContent = "#" + tries + "(" + number + " ) C'est plus !"; 
    info.className = "instruction plus";
  } else if(number > randomNumber ){
    info.textContent = "#" + tries + "(" + number + " ) C'est moins !"; 
    info.className = "instruction moins";
  } else {
      info.textContent = "#" + tries + "(" + number + " ) Félicitation vous avez vu juste !"; 
    info.className = "instruction fini";
    input.disabled = true;
  }
  
  document.querySelector("#instructions").prepend(info);
};
  
  
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup",()=>{
  if(isNaN(input.value)){
    error.style.display = "inline";
  }else{
    error.style.display = "none";
  }

});

// Etape 5 - Agir à l'envoi du formulaire

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  if( isNaN(input.value) || input.value == "" ){
    
    input.style.borderColor = "red";
    
} else { 
  
    tries++;
    input.style.borderColor = "silver";
    numberInsert = input.value;
    input.value = "";
    verify(numberInsert);
  }
 
});