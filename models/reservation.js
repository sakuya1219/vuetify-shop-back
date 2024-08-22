import { Schema, model, ObjectId } from 'mongoose'

const reservationSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users',
    required: [true, '使用者必填']
  },
  date: {
    type: Date,
    required: [true, '預約日期必填']
  },
  timeSlot: {
    type: String,
    required: [true, '預約時間段必填']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('reservations', reservationSchema)
