
///use this type of writing for copied object//both capital
// code looked messy cuz we copied it so we adding the original into function
function OppExample(value){
    //opp example
    const oppExampleCustomers={
        //you cant use word export ot let in opp so//you cant use word export ot let in opp so we convert it in to property and value
        //export let promises=undefined; this and 
        text:value//are same thing
        ,
        //property and value
        //dont use arrow function
        goat1(){
            this.text+=' wassup';
            console.log(this.text);
        },
        goat2:function(){
            this.text+=" roarrr";
            console.log(this.text);
        },
        goat3:function(value){
            this.text+=value;
            console.log(this.text);
        }
        //call
        
       
    };
    
    
    oppExampleCustomers.goat1();
    oppExampleCustomers.goat2();
    oppExampleCustomers.goat3(' no black');
    
    oppExampleCustomers.text+=' nigger';
    console.log(oppExampleCustomers.text);
    
    return oppExampleCustomers;
    
    }

    //create same thing for manager
    const managerOppExample=OppExample('fucker1');
    const managerExample=OppExample('fucker2');
    console.log(managerExample.text);
    console.log(managerExample);
    
    
    //create same thing 
    //eg cart for customers and cart for admin
    
    const oppExampleAdmin={
        //you cant use word export ot let in opp so//you cant use word export ot let in opp so we convert it in to property and value
        //export let promises=undefined; this and 
        adminText:""//are same thing
        ,
        //property and value
        //dont use arrow function
        goat1(){
            this.adminText+=' wassup';
            console.log(this.adminText);
        },
        goat2:function(){
            this.adminText+=" roarrr";
            console.log(this.adminText);
        },
        goat3:function(value){
            this.adminText+=value;
            console.log(this.adminText);
        }
       
    };
    //call for admin
    //easier to create comletely cause of object
    oppExampleAdmin.goat1();
    oppExampleAdmin.goat2();
    oppExampleAdmin.goat3(' no black');
    
    oppExampleAdmin.text+=' nigger';
    console.log(oppExampleAdmin.adminText);

