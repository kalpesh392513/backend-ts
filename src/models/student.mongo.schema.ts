import { Mongoose } from "mongoose";

export default (mongoose:Mongoose)=>{

const Schema = mongoose.Schema;
const personSchema = new Schema({
  a_string: String,
  a_date: Date,
});
return mongoose.model("Person",personSchema );
}
