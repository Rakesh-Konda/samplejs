let para=document.getElementById("para");
let no=parseInt(para.textContent);

let but=document.getElementById("but");
let but1=document.getElementById("but1");

let num=0;
function go(){
    id=setInterval(function(){
        num=num+1;
        para.textContent=num;
        if (num===11){
            // clearInterval(id)
            para.textContent=0;
            num=0;
            // clearInterval(id);
        }
    },100)
}

but.addEventListener("click",go)

function go1(){
    clearInterval(id)
}

but1.addEventListener("click",go1)
// console.log(12)