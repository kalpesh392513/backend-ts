import logger from "jet-logger"
const mongoose = require("mongoose");
const mongoDBUrl = "mongodb://localhost:27017/";
import personSchema from "@src/Schemas/person.schema";
import studentSchema from "@src/Schemas/student.schema";



async function main() {
  await mongoose.connect(mongoDBUrl);
  logger.info("connected to db...................................");
}

main().catch((err) => logger.err(err));

// add more schemas to object 
const mDbinstance = {
  personModel: personSchema(mongoose),
  studentSchema : studentSchema(mongoose)
};

export {mDbinstance};
