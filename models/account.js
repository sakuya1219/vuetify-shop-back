import { Schema, model } from 'mongoose'

const accountSchema = new Schema({
  account: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

export default model('Account', accountSchema)
