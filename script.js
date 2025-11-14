let inc=document.querySelector("#inc")
let dec=document.querySelector('#dec')
let res=document.querySelector('#res')
let h1=document.querySelector('h1')
let a=0;

inc.addEventListener('click',function(){
    a++;
    h1.innerHTML=a
})

dec.addEventListener('click',function(){
    a--;
    h1.innerHTML=a
})

res.addEventListener('click',function(){
    a=0;
    h1.innerHTML=a
})

