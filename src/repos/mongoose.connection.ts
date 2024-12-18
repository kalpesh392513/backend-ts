import logger from "jet-logger"
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost:27017/";
import personSchema from "@src/models/student.mongo.schema";



async function main() {
  await mongoose.connect(mongoDB);
  logger.info("connected to db...................................");
}

main().catch((err) => logger.err(err));

const mDbinstance = {
  personModel: personSchema(mongoose),
};

export default mDbinstance;
