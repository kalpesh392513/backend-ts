import { Sequelize } from "sequelize";
import data from "@src/repos/Person_Repo"

const sequelize = new Sequelize(
    'kalpesh',
    'root',
    'Dnyan@1234',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);
console.log('in create xonnect.');

try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');

    }).catch((error: Error) => {
        console.error('Unable to connect to the database: ', error);
    });
} catch (error: any) {
    console.log("exception in connection with DB = ", error);

}

const Person = data(sequelize)


const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Person:Person
}


export default  db;

