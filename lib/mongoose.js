import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    console.log('already connected')
    return mongoose.connection.asPromise();

  } else {
    const uri = process.env.MONGODB_URI;
    console.log('connecting' , uri)
    return mongoose.connect(uri);
  }
}