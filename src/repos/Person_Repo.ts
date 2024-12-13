import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize)=>{
    const Person = sequelize.define("person", {
      // Model attributes are defined here
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      address: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    )

    sequelize.sync().then(() => {
      console.log('sync successfully!');
    }).catch((error: Error) => {
      console.error('Unable to sync : ', error);
    });
    return Person;
  }


