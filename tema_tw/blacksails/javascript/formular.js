function functie_dark() {
   var element = document.body;
   element.classList.toggle("dark-mode");
 }



let formular=document.getElementById("formular");
'use strict';

//const fs = require('fs');

formular.addEventListener("submit", functiesubmit);

function functiesubmit(formular)
{
   formular.preventDefault();

   const data=new FormData(formular.target);
   const value=Object.fromEntries(data.entries());
   console.log({value});

   /*
   let  text=JSON.stringify(value);
   fs.writeFileSync('formulare.json', text);*/
   /*
   const text=JSON.stringify(value);
   let result=document.getElementById("result");
   result.innerHTML=text;*/

   let result=document.getElementById("result");
   const date = new Date();
   result.innerHTML=`Am primit raspunsul tau in data de ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
}

