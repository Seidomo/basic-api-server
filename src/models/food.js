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
    console.log(id, obj);
    for(let i=0; i< this.foodArray.length; i++){
      if(this.foodArray[i].id === id){
        this.foodArray[i].data = obj;
        return this.foodArray[i];
      }
    }

  }
  delete(id){
    // eslint-disable-next-line no-empty
    for(let i=0; i< this.foodArray.length; i++){
      // eslint-disable-next-line no-empty
      if (this.foodArray[i].id === id){
        delete this.foodArray[i];    
      }
    }

  }
}

module.exports = FoodInterface;