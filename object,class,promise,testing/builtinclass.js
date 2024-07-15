const date=new Date();
console.log(date);

//current time
console.log(date.toLocaleDateString());
const clock={
   a:date.toLocaleDateString(),
   //you cant use this here cuz the object hasnt been created yet
   

}

function clock2(params) {
    console.log(this);
}
clock2();
//call lets us to change value of this
//arrow function willnot change value of this
clock2.call(clock.a);