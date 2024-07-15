const image=document.querySelector('.image')
const item1=document.querySelector('.item1')
const item2=document.querySelector('.item1')
const item3=document.querySelector('.item1')
const item4=document.querySelector('.item1')
const item5=document.querySelector('.item1')
const mainContainer=document.querySelector('.mainContainer')

let array=[];

 let newStr=''
function book(value){
 
  
 
  
  

  
  for(let i=0;i<=6-1;i++){
 // String containing multiple spaces
 let str =value[i].title.toLowerCase().replace(/\s+/g,'-').replace(/ż/g, 'z').replace(/[\[\]']!()...+/g, '');
 
 // Remove multiple spaces with single space
 let newStr=str.replace(String.fromCharCode(i), '');
  
    mainContainer.innerHTML+=
  `<div class="container">
  <div class="image"><img class='img' src='${value[i].simple_thumb}'></div>
  <div class="subcontainer">
   <div class="item1">TITLE:${value[i].title}</div>
   <div class="item2">AUTHOR:${value[i].author}</div>
   <div class="item3">GENERE:${value[i].genere}</div>
   <div class="item4">SORT:${value[i].full_sort_key}</div>
   <div class="item5"><a href="${value[i].url}">ABOUT</a></div>
   </div><button><a href="https://wolnelektury.pl/media/book/txt/${newStr}.txt">read</a></button>
   
   </div>`
   console.log(`https://wolnelektury.pl/media/book/txt/${newStr}.txt`);
  }
 
 
  
  
  

 

}

