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
