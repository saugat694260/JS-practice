class Calculator{
constructor(previousOperandTextElement,currentOperandTextElement){
  this.previousOperandTextElement=previousOperandTextElement;

  this.currentOperandTextElement=currentOperandTextElement;

  this.clear();

};

clear(){
this.curentOperand='';
this.previousOperand='';
this.operation=undefined;

};

delete(){

};

appendNumber(number){
 this.currentOperand=this.currentOperand+number.toString();
};

chooseOperation(operation){

};
compute(){

};

updateDisplay(){
this.currentOperandTextElement.innerText=this.currentOperand;

};


};

console.log('hi');
const numberButtons=document.querySelectorAll('[data-number]');
const operationsButtons=document.querySelectorAll('[data-operation]');
const equalsButton=document.querySelector('[data-equals]');
const deleteButton=document.querySelector('[data-delete]');
const allClearButton=document.querySelector('[data-all-clear]');
const previousOperandTextElement=document.querySelector('[data-previous-operand ]');
const currentOperandTextElement=document.querySelector('[data-current-operand]');
const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(buttons=>{
  buttons.addEventListener('click',()=>{
    calculator.appendNumber(buttons.innerText);
    calculator.updateDisplay();
    
  })
});
operationButtons.forEach(buttons=>{
  buttons.addEventListener('click',()=>{
    calculator.appendNumber(buttons.innerText);
    calculator.updateDisplay();
    
  })
})