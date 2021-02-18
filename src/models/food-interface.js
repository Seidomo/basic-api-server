'use strict';

class FoodInterface{
  
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
 
  update(id, obj){
    this.model.findOneAndUpdate();

  }
  delete(id){
    

  }
}

module.exports = FoodInterface;