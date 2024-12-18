import  {mDbinstance} from "@src/repos/mongo/mongoose.connection"
import  {Person} from "src/models/person.model"

async function add(data:Person){
  await  new mDbinstance.personModel(data).save()
}

async function update(){}
async function deleteRecord(){}

