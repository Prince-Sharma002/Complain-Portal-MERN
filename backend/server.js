import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import { MongooseConnect } from './db/db.js';
import { userComplain } from './model/complain-schema.js';


const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials : true,
  method : "GET , POST, PUT, DELETE , PATCH , HEAD",

}

app.use(cors(corsOptions));
app.use( express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/getdata' , async (req,res)=>{
  try{
    const users = await userComplain.find({} );
    if( !userComplain || userComplain.length === 0 ){
      return res.status(404).json({message: "no data to send "});
    }
    return res.status(200).json(users);

  }
  catch(err){
    console.log(err)
  }

} )

app.post('/complain', async (req, res) => {
  try{
    console.log("data is  " , req.body)
    const {name , desciption , address , image , phone , email} = req.body;
    await userComplain.create({name , desciption , address , image , phone , email});
    return res.status(200).json({ msg : "data sent successfully" });
  }
  catch(err){
    console.log(err)
  }

});

MongooseConnect().then(()=>{
  app.listen( '5000' , ()=>{
    console.log( 'Server is running on port 5000' );
} )
} )
