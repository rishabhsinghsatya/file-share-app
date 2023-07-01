import mongoose from "mongoose";

const connection = async () => {
  const DB_URL = `mongodb://vineetsatya36:vineetsatya36@ac-koz6bz6-shard-00-00.1m0nkpv.mongodb.net:27017,ac-koz6bz6-shard-00-01.1m0nkpv.mongodb.net:27017,ac-koz6bz6-shard-00-02.1m0nkpv.mongodb.net:27017/?ssl=true&replicaSet=atlas-lupal8-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connectonr with database", error.message);
  }
};

export default connection;
