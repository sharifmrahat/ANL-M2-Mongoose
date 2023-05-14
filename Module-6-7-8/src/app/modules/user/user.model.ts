import { Schema, model } from "mongoose"
import { IUser } from "./user.interface"

const userSchema = new Schema<IUser>({
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

const User = model<IUser>('User', userSchema)

export default User