const mongoose =require('mongoose');

const connectDB=async()=>{
await mongoose.connect('mongodb+srv://shravaniP:version%40123@versioncontrol.qzxv7rr.mongodb.net/ConnectDev');
}
module.exports=connectDB;