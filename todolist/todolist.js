  const todolist= [];
  
  todorendredlist();

  function todorendredlist(){
  let todolistHTML='';
  todolist.forEach(
    (todoobject,i)=>{
      
 
  const numbers=[i+1];

const {duedate}=todoobject;
const{name}=todoobject;

  const html=`
  <div>${numbers}</div><div>
  ${name}</div>   <div> ${duedate}</div><button class="deletebutton" >
  delete
  </button>
 
  `;
  todolistHTML+=html;

    }
  );
 
  
  document.querySelector('.js-todo-list').innerHTML=todolistHTML;
  document.querySelectorAll('.deletebutton').forEach((deletebutton,i)=>{
    deletebutton.addEventListener('click',()=>{
      todolist.splice(i,1);
  todorendredlist();
    })
  });
 }
 document.querySelector('.addbutton').addEventListener('click',()=>addtodo());

  function addtodo(){
  const inputelement=document.querySelector('.js-name-input');
  let name= inputelement.value;
  const dateinput=document.querySelector('.js-date');
  const date=dateinput.value;

  todolist.push({name,duedate:date});

 


  inputelement.value='';
  todorendredlist();
  }