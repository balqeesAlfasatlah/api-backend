"use strict";
const express = require('express') 
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
app.use(express.json());
const PORT=process.env.PORT;
const mongoose = require('mongoose');

 mongoose.connect(process.env.MONOGOOSE, {useNewUrlParser: true, useUnifiedTopology: true});
const{getjuice , addjuice ,getData ,deletejuice,updatejuice}=require('./conroller')



app.listen(PORT ,()=>{
 console.log(`its listen to ${PORT}`);
})

//localhost:4002/
app.get('/',(req,res)=>{
    res.send('its working fine')
})


//localhost:4002/getjuice
 app.get('/getjuice', getjuice)

app.post('/addjuice', addjuice)
app.get('/getData/:email', getData)
app.delete('/deletejuice/:id' , deletejuice)
app.put('/updatejuice/:id' , updatejuice)