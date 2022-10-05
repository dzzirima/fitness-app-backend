// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import UserModel from "../user/user.model";
import { UserClass } from "./user.class";
import { v4 as uuidv4 } from "uuid";


export default class Userservice {

  public addUser = async (userOptions: UserClass) :Promise<Boolean> => {
    let user = await UserModel.create({
      ...userOptions,
      userId:uuidv4()

    });

    return true;
  };
}
