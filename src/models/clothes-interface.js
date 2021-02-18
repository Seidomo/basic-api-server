'use strict';

class ClothesInterface{
  // constructor(){
  //   this.id = 0;
  //   this.foodArray = [];
  // }
  constructor(model){
    this.model= model;
  }
  read(id){
    if(id){
      return this.model.find({ id: id});
    }
    return this.model.find({});
    

  }
  
  create(obj){
    const data = new this.model(obj);
    return data.save();

  }
 
  // update(id, obj){
  //   console.log(id, obj);
  //   for(let i=0; i< this.foodArray.length; i++){
  //     if(this.foodArray[i].id === id){
  //       this.foodArray[i].data = obj;
  //       return this.foodArray[i];
  //     }
  //   }

  // }
  // delete(id){
  //   // eslint-disable-next-line no-empty
  //   for(let i=0; i< this.foodArray.length; i++){
  //     // eslint-disable-next-line no-empty
  //     if (this.foodArray[i].id === id){
  //       delete this.foodArray[i];    
  //     }
  //   }

  // }
}




module.exports = ClothesInterface;