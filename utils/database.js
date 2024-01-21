import mongoose from "mongoose";

let isConnected=false;

export const connectToDB= async()=>{
    mpngoose.set('strictQuery',true);

    if(isConnected){
        console.log("DB already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {dbName:"share_prompt",
        useNewUrlParser:true,
        useUnifiedParser:true,
        useUnifiedTopology:true,
    })

    isConnected=true;
    console.log('MongoDB connected')
    } catch (error) {
            console.log(error);
    }
}