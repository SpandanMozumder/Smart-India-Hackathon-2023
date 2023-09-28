const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://spandanmozumderprof:spandanmozumderprof@cluster0.igadoy1.mongodb.net/sih?retryWrites=true&w=majority";

async function connectDb() {
  try {
    const connect = await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log(
      "Database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
  }
}

// Export the connectDb function
module.exports = connectDb;
