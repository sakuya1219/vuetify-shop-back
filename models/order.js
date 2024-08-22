import { Schema, model, ObjectId } from 'mongoose'

const schema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'users',
      required: [true, '預約使用者必填']
    },
    date: {
      type: String,
      required: [true, '預約日期必填']
    },
    timeSlot: {
      type: String,
      required: [true, '預約時段必填']
    },
    numPeople: {
      type: Number,
      required: [true, '預約人數必填'],
      min: [1, '最少 1 人'],
      max: [4, '最多 4 人']
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default model('orders', schema)
