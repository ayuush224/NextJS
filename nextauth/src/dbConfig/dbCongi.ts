import mongoose from "mongoose";

export async function connect(){
    try{
        // in typescript we need to confirm that there is not undefined value, so we need to atleast pass the empty string if in case there is nothing in URL or it has not been seted up.
        mongoose.connect(process.env.MONGO_URL || "");
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDb Connected");
        })

        connection.on("error", (error) => {
            console.log("MongoDB connection error Please make sure db is up and running");
            console.log(error);
            process.exit(); // Learn about it more prewciously
        })
    }
    catch(error){
        console.log("Something went wrong in connecting to db");
        console.error(error);
    }
}