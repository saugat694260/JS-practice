function loadProducts(){
const xhr=new XMLHttpRequest();
xhr.addEventListener('load',()=>{
    let products=JSON.parse(xhr.response);
    console.log(products[0].id);
})
//for errors
xhr.addEventListener('error',(error)=>{
    console.log('error fuck you'+error);
});
    xhr.open('GET','http://supersimplebackend.dev/products');
    xhr.send();
};
loadProducts();
