'use strict'
const axios = require('axios');
const {Juices, juiceModel} = require('./modal')

const getjuice=(req,res)=>{
    let url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    axios.get(url).then(item=>{
        console.log(item.data.drinks)
        let juicedata =item.data.drinks;
        juicedata.map(items=>{
            return( new Juices(items))
        })
        res.json(juicedata)
    })
}



const addjuice=(req,res)=>{
    let juicedata =  req.body;
    console.log(req.body);
    const newjuice = new juiceModel({...juicedata})
    newjuice.save();
}




const getData=(req,res)=>{
    let email= req.params.email
    juiceModel.find({email:email},(error,item)=>{
        res.send(item)
    })
}



const deletejuice=(req,res)=>{
    let index= req.params.id;
    juiceModel.findByIdAndRemove(index,(error,item)=>{
        juiceModel.find({},(error,element)=>{
            res.send(element)
       
    })
   
})
}

const updatejuice =(req,res)=>{
    let index = req.params.id;
    let updateData= req.body
    juiceModel.findByIdAndUpdate(index,{...updateData},(error,item)=>{
        juiceModel.find({},(error,item)=>{
            res.send(item)
        })
    })
}

module.exports ={getjuice,addjuice,getData,deletejuice,updatejuice}