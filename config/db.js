const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    let conn=null;
    if(process.env.NODE_ENV==="production"){
      console.log("productin");
      conn = await mongoose.connect(process.env.MONGO_URI);
    }
    else{
      conn = await mongoose.connect("mongodb://localhost:27017/storybooksDB");
    }

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
