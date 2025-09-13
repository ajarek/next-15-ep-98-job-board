import mongoose from 'mongoose'

export type User = {
 
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}

export type Jobs = {
 _id?: number,
  PositionName: string,
  JobType: string,
  Salary: string,
  JobDescription: string,
  Location: string,
  Published: Date,
  WhoPublished: string
}



const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const jobsSchema = new mongoose.Schema(
  {
    PositionName: { type: String, required: true },
    JobType: { type: String, required: true },
    Salary: { type: String, required: true },
    JobDescription: { type: String, required: true },
    Location: { type: String, required: true },
    Published: { type: Date, required: true },
    WhoPublished: { type: String, required: true },
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)

export const Jobs =
  mongoose.models?.Jobs || mongoose.model('Jobs', jobsSchema)
