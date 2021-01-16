const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json);

app.listen(4000,()=>{
    console.log("lsiten to 4k");
})

app.get("/sss", (request, response)=>{
    response.send("dsaa");
})


app.post("/S1", (request, response)=>{
   console.log(request.params);
   console.log('User ADded');
   
})

mongoose.connect("mongodb+srv://NoorGarments:NG1234@noorgarments.cosfg.mongodb.net/NoorGarments?retryWrites=true&w=majority", (req, res)=>{ 
    console.log("Connected to DB");
});


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://NoorGarments:<password>@noorgarments.cosfg.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });