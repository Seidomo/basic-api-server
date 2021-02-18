'use strict';

class FoodInterface{
  constructor(){
    this.id = 0;
    this.foodArray = [];
  }
  
  read(id){
    if(id){
      return this.foodArray.find(record => record.id === id);
    }else{
      return this.foodArray;
    }

  }
  
  create(obj){
    let record = {
      id: this.id +=1,
      data: obj,
    };

    this.foodArray.push(record);
    return record;

  }
 
  update(id, obj){
    for(let i=0; i< this.foodArray; i++){
      if(this.foodArray[i].id === id){
        this.foodArray[i].data = obj;
        return this.foodArray[i];
      }
    }

  }
  // delete(){

  // }
}

module.exports = FoodInterface;