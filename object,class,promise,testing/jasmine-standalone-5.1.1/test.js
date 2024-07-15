import test from "../script.js";
//tests the value from script 

describe('test suite:compare value',()=>{
  
//compares result
    it('compare numbers',()=>{
        expect(test()).toEqual(1);
    });
    it('compare numbers',()=>{
        expect(test()).toEqual(2);
    });
    
    
});

