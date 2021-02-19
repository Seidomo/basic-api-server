'use strict';

class ClothesInterface{
  constructor(){
    this.id = 0;
    this.clothesArray = [];
  }
  read(id){
    if(id){
      return this.clothesArray.find(record => record.id === id);
    }else{
      return this.clothesArray;
    }
    
  }
      
  create(obj){
    let record = {
      id: this.id +=1,
      data: obj,
    };
    
    this.clothesArray.push(record);
    return record;
    
  }
     
  update(id, obj){
    console.log(id, obj);
    for(let i=0; i< this.clothesArray.length; i++){
      if(this.clothesArray[i].id === id){
        this.clothesArray[i].data = obj;
        return this.clothesArray[i];
      }
    }
    
  }
  delete(id){
   
    for(let i=0; i< this.clothesArray.length; i++){
     
      if (this.clothesArray[i].id === id){
        delete this.clothesArray[i];    
      }
    }
    
  }
}


module.exports = ClothesInterface;