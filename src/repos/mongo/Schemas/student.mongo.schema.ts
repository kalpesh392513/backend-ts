import { Mongoose } from "mongoose";



export default (mongoose:Mongoose)=>{

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: String,
  address: Date,
});
return mongoose.model("Person",personSchema );
}
