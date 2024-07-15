//save data in urln
let Url='http://127.0.0.1:5500/index.html?id=1&name=bro'
let currentUrl=window.location.href;


if(!currentUrl===Url){
   window.location.href=Url;
   currentUrl=Url;
  
}

const url=new URL(window.location.href/*current location*/);
console.log(url.searchParams.get('id'));//search parameter
console.log(url.searchParams.get('name'));//search parameter