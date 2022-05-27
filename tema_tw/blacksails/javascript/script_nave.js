

var poze=new Array();
poze[0]=new Image();
poze[0].src="../imagini/treasure_map.jpg";
poze[1]=new Image();
poze[1].src="../imagini/map.jpg";
poze[2]=new Image();
poze[2].src="../imagini/treasure_map.jpg";
poze[3]=new Image();
poze[3].src="../imagini/map2.jpg";
poze[4]=new Image();
poze[4].src="../imagini/apa_de_Sus.jpg";
function generatebackground()
{
    //var img=document.getElementById("first_picture");
    document.getElementById("first_picture").src=poze[Math.floor(Math.random()*5)].src;
}

function showpoza(_src)
{
    let d=document.getElementById("moveimg");
    d.src=_src;
}

let k=document.addEventListener("keydown", muta);

function muta(k)
{
    if(k.key=="a" || k.key=='ArrowLeft')
        {FunctieA();}
    if(k.key=="w" || k.key=='ArrowUp')
        FunctieW();
    if(k.key=="s" || k.key=='ArrowDown')
        FunctieS();
    if(k.key=="d" || k.key=='ArrowRight')
        FunctieD();

}

function FunctieS()
{
let d=document.getElementById("move");
var topvechi=parseInt(d.style.top);
d.style.top=topvechi+5+"px";
d.style.bottom=topvechi-5+"px";
}

function FunctieD()
{
let d=document.getElementById("move");
var leftvechi=parseInt(d.style.left);
d.style.left=leftvechi+5+"px";
d.style.right=leftvechi-5+"px";
}


function FunctieW()
{
let d=document.getElementById("move");
var topvechi=parseInt(d.style.top);
d.style.bottom=topvechi+5+"px";
d.style.top=topvechi-5+"px";
}

function FunctieA()
{
let d=document.getElementById("move");
var leftvechi=parseInt(d.style.left);
d.style.right=leftvechi+5+"px";
d.style.left=leftvechi-5+"px";
}


const harta=document.getElementById("peste_poza");
let c=harta.addEventListener("click", steag)
let count=0;
function steag(c)
{


    const div=document.createElement("div");
    
    var img=document.createElement("img");
    img.setAttribute("src", "../imagini/icon.png");
    img.setAttribute("height","35")
    div.appendChild(img);
  
    var x= c.pageX /*+ harta.offsetLeft*/ +"px";
    var y=c.pageY /*+ harta.offsetTop */+ "px";

    harta.appendChild(div);
  
    div.style.zIndex="1";
    document.getElementById("first_picture").style.position="relative";
    div.style.position="absolute";
    div.style.top=y;
    div.style.left=x;
    setTimeout(distrug,7000,div);
}

function distrug(div)
{
    div.remove();
}

var images=[
    "../imagini/adventure-galley-icon.jpg",
     "../imagini/golden-hind-icon.jpg", 
    "../imagini/queen-annes-revenge-icon.jpg",
    "../imagini/royal-fortune.jpg",
    "../imagini/fancy.jpg",
    "../imagini/ranger.jpg",
    "../imagini/bachelorsdelight.jpg",
    "../imagini/brigantine-icon.jpg"
];

setInterval(corabierandom, 10000);

function corabierandom()
{
    var img=document.getElementById("moveimg");
    img.setAttribute("src",images[Math.floor(Math.random()*images.length)]);
}

let nume_pirati=new Array();

function getalt(_img)
{   
    var ok=1;
    for(var i=0;i<=nume_pirati.length;i++)
            if(nume_pirati[i]==_img.alt)
                {nume_pirati.splice(i,1); ok=0;}
    if(ok==1)
        nume_pirati.push(_img.alt);
}

function sortpirati()
{
    let p=nume_pirati.sort();
    let pObject=document.getElementById("lista_pirati");    
    pObject.style.alignContent="center";       
    pObject.innerHTML=p;                              
}
