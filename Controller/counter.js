import db from '../utils/db.js';



//fetch all counter to check status
const getAllCounter = (req, res) => {

      const id = req.params.id;
    const sql = "SELECT * FROM `counter_list`"
    db.query(sql,(err, result) => {
       
        if (err) {
            return result.json({Status:false, Error:"Network Error"})
        } else {
          return res.json({Status:true ,Result:result})  
        }
    })
}


//fetch all counter orders to check status


 const orderDetailsPlease = (req, res) => {
    
    const orderid = req.params.id;
    
    const sql = "SELECT * FROM `counter_orders` Where `counter_orders`.`counter_id` = ? "
    db.query(sql, [orderid], (err, result) => {
       
        if (err) {
            return res.json({Status:false, Error:"Network Error"})
        } else {
          return res.json({Status:true ,Result:result})  
          
        }
    })
}



//for book table
const bookCounter = (req, res) => {

    const id = req.params.id;
    
    const sql = `UPDATE counter_list set counter_status=?,book_time=? Where id = ?`;
           const values = [
               req.body.status,
               req.body.book_time

           ]
      
    db.query(sql, [...values,id], (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: "Network Error ahe bhau" })
        } else {
            return res.json({ Status: true, Result: result })
          
        }
    })
}

//for add new counter
const addNewCounter = (req, res) => {
    const sql = "INSERT INTO counter_list (`counter_name`, `counter_no`, `counter_Status`,`book_time`) VALUES (?)" //for multi input we use back tick for whole query
    const values = [
        req.body.name,
        req.body.number,
        req.body.status,
        req.body.book_time,    
]
    db.query(sql,[values],(err,result)=>{
if (err) {
    return res.json({Status:false, Error:"Network Error" + err})
} else {
  return res.json({Status:true ,Result:result})  
}
    })
       
    }


// for delete counter 
const deleteCounter = (req, res) => {
  
    const id = req.params.id;
   
    const sql = "DELETE FROM `counter_list` WHERE id = ?"
    db.query(sql, [id], (err, result) => {
       
        if (err) {
            return res.json({ Status: false, Error: "Network Error" })
        } else {
            return res.json({ Status: true, Result: result })
          
        }
    })
}

//for add new counter
const addNewOrderMenuCounter = (req, res) => {
    const data = req.body.menuCart
             
    const sql = "INSERT INTO counter_orders (`counter_id`,`check_status`, `item`, `price`, `qty`, `total`) VALUES?" //for multi input we use back tick for whole query

    let values = data.map(item => [item.counterId,item.check, item.item,item.price,1,1*item.price]);
  
    db.query(sql,[values],(err,results,fields)=>{
if (err) {
    return res.json({Status:false, Error:"Network Error" + err})
} else {
  return res.json({Status:true ,Result:results})  
}
    })
       
    }


    //for add complete order to counter menu

//for add new counter
const moveNewOrderToCompleteMenuCounter = (req, res) => {
 console.log(req.body)
    const date = new Date()
    const token = Math.random() * 1000 + 1
    const tokenNo = token.toFixed()
      ;
    const sql = `INSERT INTO counters (item_name, item_price, item_qty,item_total,date,counter_token)
     SELECT item, price, qty,total,${date},${tokenNo}
     FROM counter_orders;` //for multi input we use back tick for whole query

   
    db.query(sql,(err,results,fields)=>{
if (err) {
    return res.json({Status:false, Error:"Network Error" + err})
} else {
  return res.json({Status:true ,Result:results})  
}
    })
       
    }


export { getAllCounter, addNewCounter , bookCounter, deleteCounter ,addNewOrderMenuCounter,orderDetailsPlease,moveNewOrderToCompleteMenuCounter }



 