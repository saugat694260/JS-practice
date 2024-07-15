

 /**
const html=document.querySelector('.store');

 let array=[]
fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php').then(res=>


res.json()

).then(data=>{
  
const info= data.data;
take(info);


  
 }); 
 function take(data){
  for(i=0;i<=data.length/250;i++){
  
    html.innerHTML+=` <p>${data[i].id}</p><br>
   <div><img class="img" src="${data[i].card_images[0].image_url}"></div>`
  }
 } */

 // `
 const html=document.querySelector('.store');


fetch('https://wolnelektury.pl/api/books/').then(res=>


res.json()

).then(data=>{
  
  const info= data;
  book(info);
 



  
 }); 
 
 





//https://github.com/garethbjohnson/gutendex/blob/master/readme.md
//https://hoppscotch.io/

 
