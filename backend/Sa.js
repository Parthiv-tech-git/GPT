
const e = require("express"); 
const b = require("cors"); 

const p = e(); 

p.use(b()); 
p.use(e.json()); 

p.get('/add', (req, res) => { 
    res.send("hello"); 
}); 

p.listen(3000, () => {
    console.log("hello success"); 
}); 
