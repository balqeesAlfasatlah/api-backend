'use strict';
const mongoose = require('mongoose');

class Juices {
    constructor(items){
        this.strDrinkThumb = items.strDrinkThumb;
        this.strDrink = items.strDrink;
        this.idDrink = items.idDrink;

    }
}


const juiceSchema = new mongoose.Schema({
    email : String ,
    strDrinkThumb: String ,
    strDrink : String ,
    idDrink : String
  });

  const juiceModel = mongoose.model('juicelistss', juiceSchema);

module.exports={Juices , juiceModel}