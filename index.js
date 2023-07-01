"use strict"
let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let str=" ";
let arr=Array.from(buttons);
arr.forEach(buttons=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            str=String(eval(str));
            input.value=str;
        }else if(e.target.innerHTML=='AC'){
            str=" ";
            input.value=str;
        }else if(e.target.innerHTML=='DEL'){
            str=str.substring(0,str.length-1);
            input.value=str;
        }
        else{
        str=str+e.target.innerHTML;
        input.value=str;
        }
    })
})



