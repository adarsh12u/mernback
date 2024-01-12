require('dotenv').config();
const express = require("express")
const app = express();
const Routes  = require("./routes/Routes")
const cors = require('cors')
require("./config/connection")
const user = require("./models/HR")
 const cookieparser = require('cookie-parser')
// PORT
const PORT = process.env.PORT || 4000;

const path = require('path')

// app.use(express.static(path.join(__dirname , './client/app/build')))
console.log(path.join(__dirname ))
// app.get('*',function(req,res){
//      res.sendFile(path.join(__dirname , './client/app/build/index.html' ))
// })
// middlew
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',Routes)




// create server




const start = async()=>{

    try {
          
        app.listen(PORT , ()=>{
 
             console.log(`Server Run Sucessfully at PORT: ${PORT}`);

        })

    } catch (error) {
        console.log(error.message)
    }

}
start();
  
       

