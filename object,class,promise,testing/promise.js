//importing whole file
import "./object.js"
//promises
//to handel asynchrous code
//lets us wait before finishing code before going to next step
const button= document.getElementsByTagName('button')[0];
const result=document.querySelector('.test-js');
let text='hello';
result.textContent=text;

//promise
//example 1
let p=new Promise((resolve,reject)=>{
    let a=1;
    if(a===1){
resolve('success');
    }
    else{
        reject('failed');
    }
});

p.then((message)=>{'cool '+message}).catch((message)=>{
    console.log('not cool '+message);
});

//example 2
let userLeft=false;
let userLoggedout=false;

function examplepromise(){

return new Promise((resolve,reject)=>{

if(userLeft){
reject({
    name:'user left',
    message:'oww'
});

}
else if(userLoggedout){
    reject({
        name:'user logged out',
        message:'owww nooo'
    });

}
else{
resolve({message:'hell yeah'});

}

})


}

examplepromise().then((message)=>{
console.log('success '+message.message);
}).catch((message)=>{
    console.log('fail '+message.message);
})

//example 3
const example1=new Promise((resolve,reject)=>{
resolve('done 1');
});
const example2=new Promise((resolve,reject)=>{
    resolve('done 2');
});
const example3=new Promise((resolve,reject)=>{
    resolve('done 3');
});
Promise.all(
    [example1,example2,example3]
).then((message)=>{console.log(message);});
//use promise.race to run in order