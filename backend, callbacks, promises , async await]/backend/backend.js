let url='http://127.0.0.1:5500/3%20(2).jpg';
export let element=document.getElementsByTagName('div');
//get =get smth
//post =create smth
//put =update
//.delete=delete

let products=[];

function loadProducts(funct){//loads an function for parameter
    
const xhr=new XMLHttpRequest();//class
//response is synchrous

xhr.addEventListener('load',()=>{
    products=JSON.parse(xhr.response);

    funct();//function grt loaded products
});
xhr.open('GET','http://supersimplebackend.dev/products');//two parameters type and an URL
xhr.send();//sends request
//acynchronous doesnt wait for result
}

loadProducts(loadedOrNot);
function loadedOrNot(){
    element[0].innerHTML+='loaded<br>'
}


//callback
//used for loading of data that is usually synchrous and aynchrous
function load(func){
func();
}
load(result);
function result(){
    element[0].innerHTML+='sucess<br>';
}

let cart=[];
cart.push({
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryOptionId:'1'
    });
 
//send data
document.getElementsByTagName('button')[0].addEventListener('click',async()=>{
const response=await fetch('http://supersimplebackend.dev/orders',{
    method:'POST',
    headers:{
        'Content-Type':'application.json'
    },
    body:JSON.stringify({//date that we are going to send
    cart:cart
          })
});
const order=await response.json()
console.log(order);
})
/**
 * [{
 * productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
 * quantity:2,
 * deliveryOptionId:'1'
 * }]
 */

