import { HydratedDocument } from "mongoose";
import { Model } from "mongoose";


export interface IUser {
    id: string,
    role: 'student'
    name: {
        firstName: string
    lastName?: string
    }
    gender: 'male' | 'female'
    dob?: string
    email: string
    contactNo?: string
    password: string
    address?: {
        presentAddress?: string
        permanentAddress?: string
    }
}


// export interface UserModel extends Model<IUser>{
//    
// }

//instance methods:
export interface IUserMethods {
    fullName(): string;
  }


//only for instance methods:
// type UserModel = Model<IUser, {}, IUserMethods>;

  //User model for both interface & statics:
 export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }
