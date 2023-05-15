import { Model, Schema, model } from "mongoose"
import { IUser, IUserMethods, UserModel } from "./user.interface"


const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {type: String, required: true, unique: true},
    role: {type: String, required: true},
    gender: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {
        firstName: {type: String, required: true},
        lastName: {type: String},
    },
    dob: {type: String},
    address: {
        presentAddress: {type: String},
        permanentAddress: {type: String},
    },
    contactNo: {type: String}
})

//instance method
userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });

//static method
userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role: 'admin'})
    return admins
  });

const User = model<IUser, UserModel>('User', userSchema)

export default User