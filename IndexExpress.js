import express from 'express';
import path  from 'path';


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

//this is use for fetch data from the form ejs file
app.use(express.urlencoded({extended:true}))

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

app.post('/formData',(req,res)=>{
        
    // use req.body for the save data in terminal it fetch data from the form
    console.log(req.body);
    res.json({success:true});
    
})



app.listen(port,()=>{
    console.log('Server is running on port ${port}');
});