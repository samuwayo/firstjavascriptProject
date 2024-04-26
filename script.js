let input = document.getElementById('input');
let buttons = document.getElementsByTagName('button');
const btns =Array.from(buttons);
btns.forEach((btn)=>{

btn.addEventListener("click",(e)=>{
if(e.target.innerHTML=="ca"){
    input.value  =  "";
}
else if(e.target.innerHTML=="="){
    input.value  = eval(input.value )
}
else if(e.target.innerHTML=="del"){
    input.value  = input.value.substring(0,input.value.length-1)
}
else{
    input.value  +=  e.target.innerHTML;
}

})

})