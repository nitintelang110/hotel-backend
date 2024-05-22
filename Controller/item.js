import db from '../utils/db.js';

// add new item to database
const addItem = (req, res) => {
    const sql = "INSERT INTO item_list (`item`, `price`, `category`,`item_code`) VALUES (?)" //for multi input we use back tick for whole query
    const values = [
        req.body.name,
        req.body.price,
        req.body.category,
        req.body.code,    
]
    db.query(sql,[values],(err,result)=>{
if (err) {
    return res.json({Status:false, Error:"Network Error" + err})
} else {
  return res.json({Status:true ,Result:result})  
}
    })
       
    } 


//fetch all item list to check status
const getItem = (req, res) => {
    const sql = "SELECT * FROM `item_list`"
    db.query(sql,(err, result) => {
       
        if (err) {
            return result.json({Status:false, Error:"Network Error"})
        } else {
          return res.json({Status:true ,Result:result})  
        }
    })
}

// for delete item 
const deleteItem = (req, res) => {
  
    const id = req.params.id;
    console.log(id)
    const sql = "DELETE FROM `item_list` WHERE id = ?"
    db.query(sql, [id], (err, result) => {
       
        if (err) {
            return res.json({ Status: false, Error: "Network Error" })
        } else {
            return res.json({ Status: true, Result: result })
          
        }
    })
}

export { addItem,getItem,deleteItem }