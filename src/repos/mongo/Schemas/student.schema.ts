import { Mongoose } from "mongoose";

export default (mongoose:Mongoose)=>{
const studentSchema = new mongoose.Schema({
  name: String,
  address: String,
});
return mongoose.model("Student",studentSchema );
}
