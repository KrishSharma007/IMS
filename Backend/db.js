const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    const mongoURI ="mongodb+srv://krishsharma8105:Krish@007@cluster0.hidhi6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectToMongo;
