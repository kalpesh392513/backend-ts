import { DataTypes, Sequelize } from "sequelize";
import logger  from 'jet-logger'

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
      logger.info('sync successfully!');
    }).catch((error: Error) => {
      logger.err('Unable to sync : '+ error);
    });
    return Person;
  }


