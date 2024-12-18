
import { isNumber } from 'jet-validators';
import { transform } from 'jet-validators/utils';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import UserService from '@src/services/user.service';
import User from '@src/models/user.model';
// import db from '../repos/mysql.connection.repo'
import mDbinstance  from "@src/repos/mongo/mongoose.connection"
import logger from "jet-logger"


import { parseReq, IReq, IRes } from './common';

// **** Variables **** //

const Validators = {
  add: parseReq({ user: User.test }),
  update: parseReq({ user: User.test }),
  delete: parseReq({ id: transform(Number, isNumber) }),
} as const;


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  console.log( _.params);
  console.log( _.body); 
  const users = await UserService.getAll();
  res.status(HttpStatusCodes.OK).json("id ="+_.params.id+ " not found "+users);
}

/**
 * Add one user.
 */

async function add(req: IReq, res: IRes) {
  // const { user } = Validators.add(req.body);
  logger.warn("add method called ............")
  await new mDbinstance.personModel({name :"abc ", address : "dummy "}).save()

  // await UserService.addOne(user);
  // await UserService.addOne();

  res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq, res: IRes) {
  const { user } = Validators.update(req.body);
  await UserService.updateOne(user);
  res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const { id } = Validators.delete(req.params);
  await UserService.delete(id);
  res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
