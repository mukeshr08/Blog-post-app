import mangoos from 'mongoose';
const connectmango=async ()=>mangoos.connect(process.env.MONGO_DB)