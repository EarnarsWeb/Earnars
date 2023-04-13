  const express = require("express");
const {db} = require("../db.js")
  
  const getPosts = (req,res)=>{
 
    const q =  "SELECT * FROM users";

    db.query(q,(err,data)=>{
      if (err) return res.send(err)

      return (
        // res.status(200).json(data);
        res.send(data))
      
    })
    // console.log(data)


}

const getPost=(req,res)=>{

  const q =  "SELECT * FROM sportsTable";

  db.query(q,(err,data)=>{
    if (err) return res.send(err)

    return (
      // res.status(200).json(data);
      res.send(data))
    
  })

 
 }

 const getNum=()=>{
   const q ="SELECT COUNT(id) FROM user";
   db.query(q,(err,data)=>{
     if(err) return console.log(err)

     return res.send(data)
   })
 }

 const getPost2=(req,res)=>{
  const q =  "SELECT * FROM sports";
  db.query(q,(err,data)=>{
    if (err) return res.send(err)
    return (
      // res.status(200).json(data);
      res.send(data))
  })
 }

 const getPost3=(req,res)=>{
  const q =  "SELECT * FROM PostResultSports";
  db.query(q,(err,data)=>{
    if (err) return res.send(err)
    return (
      // res.status(200).json(data);
      res.send(data))
  })
 }



 const addPost1=(req,res)=>{

  const spot = "INSERT INTO forextable(pair,condition,entry,takeProfit,stopLoss) VALUES ?"

  const vale =req.body.map((app)=>([
    `${app.todo.pair}`,`${app.todo.condition}`,`${app.todo.entry}`,`${app.todo.takeProfit}`,`${app.todo.stopLoss}`
   ]))
  console.log(vale)

  db.query(spot,[vale],(err,data)=>{
    if(err) return console.log(err)

    return console.log('user has been created')

  })
 }

 const addPost2=(req,res)=>{

  const resultFib = "INSERT INTO PostResultSports(gameNo,dailyProfit,earned,lossed) VALUES (?)"
  const val= [req.body.gameNo,req.body.dailyProfit,req.body.earned,req.body.lossed]
  console.log(val)

  db.query(resultFib,[val],(err,data)=>{
    if(err) return res.json(err)

    return res.status(200).json('user has been created')

  })
 }


 const updatePost =(req,res)=>{

  const regId = req.params.id;

  

  const pa = "UPDATE users SET `username` = ?,`email` = ?, `password` = ?, `country` = ?,`phoneNumber` = ? WHERE id = ? "

  const valem = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.country,
    req.body.phoneNumber
  ]


  db.query(pa,[...valem,regId],(err,data)=>{

    if(err) return console.log(err)
    // res.json(err)
    // return res.json('Books has been Update successFully')
    return console.log("Books Has Been Update")

  })

 }





 const getById =(req,res)=>{

  const regId = req.params.id;

  

  const pa = "SELECT *  FROM users (`username` = ?,`email` = ?, `password` = ?, `country` = ?,`phoneNumber` = ?) WHERE id = ? "

  // const valem = [
  //   req.body.username,
  //   req.body.email,
  //   req.body.password,
  //   req.body.country,
  //   req.body.phoneNumber
  // ]


  db.query(pa,(err,data)=>{

    if(err) return console.log(err)
    // res.json(err)
    // return res.json('Books has been Update successFully')
    return res.send(data)

  })

 }

 const addPost3=(req,res)=>{

  const tire = "INSERT INTO postForex (tradeNo,pair,condition,entryPoint,exitPoint,takeProfit) VALUES (?)"
  const tirem= [req.body.tradeNo,req.body.pair,req.body.condition,req.body.entryPoint,req.body.exitPoint,req.body.takeProfit]
  console.log(tirem)

  db.query(tire,[tirem],(err,data)=>{
    if(err) return console.log(err)

    return res.status(200).json('user has been created')

  })
 }

 const postResultForexPost =(req,res)=>{

  const forexResult = "INSERT INTO postResultForex(tradeNo,pair,condition,entryPoint,exitPoint,takeProfit) VALUES (?)"

  const resul = [req.body.tradeNo,req.body.pair,req.body.condition,req.body.entryPoint,req.body.exitPoint,req.body.takeProfit]

  db.query(forexResult,[resul],(err,data)=>{
    if (err) return console.log(err)

     return console.log('successful upload')
  })

 }

 const postResultCryptoPost =(req,res)=>{

  const forexResult1 = "INSERT INTO postResultCrypto(tradeNo,pair,condition,entryPoint,exitPoint,takeProfit) VALUES (?)"

  const resuls = [req.body.tradeNo,req.body.pair,req.body.condition,req.body.entryPoint,req.body.exitPoint,req.body.takeProfit]

  db.query(forexResult1,[resuls],(err,data)=>{
    if (err) return console.log(err)

     return console.log('successful upload')
  })

 }


 const postResultBinaryPost =(req,res)=>{

  const forexResult2 = "INSERT INTO postResultBinary(tradeNo,pair,condition,expireTime,Profit) VALUES (?)"

  const resulss = [req.body.tradeNo,req.body.pair,req.body.condition,req.body.expireTime,req.body.profit]

  db.query(forexResult2,[resulss],(err,data)=>{
    if (err) return console.log(err)

     return console.log('successful upload')
  })

 }

 const addPost=(req,res)=>{
  const sportInfo= "INSERT INTO sports(time,league,teamA,teamB,tip,odd) VALUES ?"
  const val =req.body.map((app)=>([
   `${app.todo.time}`,`${app.todo.league}`,`${app.todo.teamA}`,`${app.todo.teamB}`,`${app.todo.tip}`,`${app.todo.odd}`
  ]))

 console.log(val)

  db.query(sportInfo,[val],(err,data)=>{
    // if(err) return res.json(err)
    if (err) return console.log(err)

    // return console.log("user has been created")
    return res.send('user has been created')
  
  })
 }

   const addCopon =(req,res)=>{

    const codes = "INSERT INTO coupon(betName,couponCode) VALUES (?)"

    const valin =[req.body.betName,req.body.couponCode]

    db.query(codes,[valin],(err,data)=>{
      if(err) return console.log(err)

      return console.log("post has been inserted")
    })

   }


   const getCopon =(req,res)=>{

    const codes = "SELECT * FROM coupon"

    db.query(codes,(err,data)=>{
      if (err) return res.send(err)
  
      return (
        // res.status(200).json(data);
        res.send(data))
      
    })

   }

   const getCount =(req,res)=>{
     const countNumId ="SELECT COUNT(id) AS id_count FROM users"

     db.query(countNumId,(err,data)=>{
       if(err) return res.json(err)

       return res.send(data)
     })

   }

 const deletePost=(req,res)=>{
  res.send("MR Kingsley is back")
 }

//  const updatePost=(req,res)=>{

//   const updateFile = "UPDATE users SET country = ?,phoneNumber = ? WHERE id = ?"
 
//  }



module.exports= {addPost,getPosts,getPost,updatePost,deletePost,addPost1,getPost2,addPost2,getPost3,addPost3,addCopon,getCopon,postResultForexPost,postResultBinaryPost,postResultCryptoPost,getNum,getById,getCount}

