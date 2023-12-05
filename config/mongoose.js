//this file is used to set connection with the database
const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//name of the db is csv-manager
mongoose.connect(process.env.DB_URL);

const db=mongoose.connection;
//for error
 db.on('error', console.error.bind(console,"ERROR CONNECTING TO DATABASE!!"));

 //on success
 db.once('open', ()=>{
     console.log("Connected to database");
 });

 module.exports=db;