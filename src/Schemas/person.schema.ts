import { Mongoose } from "mongoose";

export default (mongoose:Mongoose)=>{
const personSchema = new mongoose.Schema({
  name: String,
  address: String,
});
return mongoose.model("Person",personSchema );
}
