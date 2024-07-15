//class is basically object generator
//better and more features
//start with capital

class Example{

text="";
value="";

goat1(){

    this.text+=this.value;
    console.log(this.text);
};



};
//we had to create these object again and again so to make code more cleaner we using constructer
//object 1
const example=new Example();
example.text='wassup ';
example.value="value";
example.goat1();
//object 2
const example2=new Example();
example2.text='not much';
example2.value=" bro";
example2.goat1();

//constructor
//constructor is great to run setup code
class Example2{

    //use # to make variable private


    text;
    #value;
    
//object inside a constructor
object={

go:1,

egg(){
    console.log(this.go);
},
banana:function(){
    this.go=3;
    console.log(this.go);
},

};
//you can also make method private
    #goat1(){
    
        this.text+=this.#value;
        console.log(this.text);
    };

//must me name constructor constructor
//dont use return
    constructor(value){
        //we dont have to create object inside constructor
        this.text='wassup ';
        this.#value=value;
        this.#goat1();
        
        //calling object
        this.object.egg();
        this.object.banana();

    };
    
    
    
    
    
    };
    const Example2example1=new Example2(' lol');

