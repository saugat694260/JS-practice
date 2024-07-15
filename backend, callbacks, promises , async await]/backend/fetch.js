import { element } from "./backend.js";

//fetch is better way of making http request
export let url='http://supersimplebackend.dev/products'

function loadProductsFetch(){

let Promise=fetch(url).then((response)=>{
//response.json for results
    return response.json()//returns a promise
}).then((data)=>{//the returned response will be in this parameter
    if(data){
        element[0].innerHTML+='fetch sucess<br>'
    }
})
return Promise;//you will be able to use .then when calling this function
}

Promise.all([loadProductsFetch().then(()=>{
    element[0].innerHTML+='fetch next step<br>'
})]).catch(()=>{//error
    element[0].innerHTML+='fetch error occured<br>'
});