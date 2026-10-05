
const e = require("express"); 
const b = require("cors"); 
const my =require("mysql2"); 

const p = e()

p.use(b()); 
p.use(e.json()); 
const db = my.createConnection({
    host:'localhost',
    root:'root',
    password:'Parthiv56',
    database:'sys'
})
db.connect((res,err)=>{
    if(err){
        console.log('batabase is not connt')
    }
    else{
        console.log('batabase is connt')


    }
})

p.get('/add', (req, res) => { 
    res.send("hello"); 
}); 

p.listen(3000, () => {
    console.log("hello success"); 
}); 
