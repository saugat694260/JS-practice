import { element } from "./backend.js";
//better way of handeling async codes 
//better than promises
let text='';
async function loadText(){//async makes a function return a promise
    text=await textToBeSent();
    return text;//will be saved in next parameter
    
}
loadText().then((text)=>{
    element[0].innerHTML+=text;
});

function textToBeSent(){
    return 'text for await example<br>';
}

