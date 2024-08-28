let input=document.getElementById("inputbox");
let btns=document.querySelectorAll("button");

let string=" ";
let arr=Array.from(btns);
arr.forEach(button=>{
    button.addEventListener('click',(event)=>{
        if(event.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(event.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(event.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1); //substring= one letter before
            input.value=string;

        }
        else{
            string+=event.target.innerHTML;
            input.value=string;
        }
    })
})