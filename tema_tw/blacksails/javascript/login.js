/*
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(text1.value.match(mailformat))
{
alert("Adresa de mail corecta");
document.form1.text1.focus();
localStorage.setItem("autentificat", inputText.value)
document.getElementsByTagName('h2')[0].innerHTML=localStorage.getItem("autentificat")
return true;
}
else
{
alert("Nu este o adresa de mail valida");
document.form1.text1.focus();
return false;
}
}

/*
window.onload = () =>
{
const loginButton=document.querySelector('#login');
console.log(loginButton);
const logoutButton=document.querySelector('#logout');
}

loginButton.addEventListener('click', login);
logoutButton.addEventListener('click', logout);*/
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(text1.value.match(mailformat))
            return 1;
else return 0;
}

function login()
{
    const email=document.getElementById("text1").value;
    const varsta=document.getElementById("text2").value;
    const user={email, varsta};
    if(ValidateEmail(email))
    {localStorage.setItem('user', JSON.stringify(user));
    mesaj();}
    else alert("reintroduceti adresa de mail.")
    
}

function mesaj()
{
    
    const msj=document.querySelector(".mesaj");
    let user=null;
    try{
        user=JSON.parse(localStorage.getItem('user'));
    } catch(error){
        user=null;
    }
    if(user){
        msj.innerHTML=`you are logged in as ${user.email}, ${user.varsta}. `;
    }
    else
    {
        msj.innerHTML="you aren't logged in.";
    }
}

function logout()
{
    document.getElementById("text1").value="";
    document.getElementById("text2").value="";
    localStorage.removeItem('user');
    mesaj();
}

document.getElementById("demo").addEventListener("keydown", myFunction);

function myFunction() {
    var text = "";
    var x = document.getElementById("demo");
    text += x.value;
    document.getElementById("mail").style.backgroundColor = text;
  }
