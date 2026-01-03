const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const route = require("./api/route/route");
const app = express();
app.use(express.json());
app.use(cors());
app.use(route);

const mongourl ="mongodb+srv://nseem:123456780@cluster0.hepayzq.mongodb.net/"

mongoose.connect(mongourl);

mongoose.connection.on("connected" ,() =>{
console.log("mongo connected");
});

mongoose.connection.on("error" , (err) => {
console.error("mongoDB connection error:", err);
});


app.get("/", (req, res) => {
   res.status(200).json({
      message:"server is live 🤷‍♂️"

   })
})

app.get("/main", (req, res) => {
   res.status(200).json({
      name: "nseem",
      age: 12,
   })
})

app.post("/fullname", (req, res) => {
   const { name, LastName } = req.body
   res.status(200).json({
      fullname: name + LastName
   })
})

app.post("/youareadult", (req, res) => {
   const { age } = req.body
   if (age > 18) {
      return res.status(200).json({
         message: true
      })
   } else {
      return res.status(200).json({
         message: false
      })
   }
})

app.post("/sum", (req, res) => {
   const { num1, num2 } = req.body
   return res.status(200).json({
      message: num1 + num2
   })
})

app.post("/averag", (req, res) => {
   const { m1, m2, m3 } = req.body

   return res.status(200).json({
      message: (m1 + m2 + m3)/3
   })
})

app.post("/order", (req, res) => {
   const { order } = req.body;

   if (!order.amount) {
      return res.status(500).json({
         error: true,
         errorMessage: "amount is must"

      })
   }
   res.status(200).json({
      Message: "order resived",
      price: order.amount * order.price,
   });
});


module.exports = app  