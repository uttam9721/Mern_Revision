import express from 'express';
import path  from 'path';
import mongoose from 'mongoose';


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

//this is use for fetch data from the form ejs file
app.use(express.urlencoded({extended:true}))

// mongoose.connect()

// main().catch(err => console.log(err));
//     console.log('show error');

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/mern_revision');
//   console.log('connected');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// 

mongoose.connect('mongodb://localhost:27017/Users')
.then(()=>{
    console.log("connected");
})
.catch(err => {
    console.log("error: " + err);
})

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
})
const User = mongoose.model('User', UserSchema)













//C R U D
//Create = POST (method)
//Read = GET (method)
//Update = PUT (method)
//Delete = DELETE (method)


app.get('/',(req,res) => {
    // res.send("hii uttam maurya how are you i hope you are doing well ");
    // res.json('{success}');
    // res.send(" <h1>uttam</h1>");
    // res.sendFile('./index.html');
    
    // const dir=path.resolve();
//   const url =  path.join(dir,'./index.html');
//   res.sendFile(url);
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.render('index.ejs');
    // res.render('index.html');
});

app.post('/formData',async(req,res)=>{
        
    // use req.body for the save data in terminal it fetch data from the form
    console.log(req.body);
    console.log(req.body);
    const obj ={
        name:req.body.name,
        email:req.body.email,
    }
    await User.create(obj)
    console.log("form summited")
    res.json({success:true});
})



app.listen(port,()=>{
    console.log('Server is running on port ${port}');
});