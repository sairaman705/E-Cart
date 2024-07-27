import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database " + conn.connection.host);
    } catch (error) {
        console.log("Error in MongoDB: " + error);
        process.exit(1); // Exit process with failure
    }
}

export default connectDb;
