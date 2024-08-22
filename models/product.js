import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, '貓咪名稱必填']
  },
  age: {
    type: Number,
    required: [true, '貓咪年齡必填'],
    min: [0, '貓咪年齡不能小於 0']
  },
  image: {
    type: String,
    required: [true, '貓咪圖片必填']
  },
  description: {
    type: String,
    required: [true, '貓咪說明必填']
  },
  breed: {
    type: String,
    required: [true, '貓咪品種必填'],
    enum: {
      values: ['品種1', '品種2', '品種3', '品種4'],
      message: '貓咪品種錯誤'
    }
  },
  adoptable: {
    type: Boolean,
    required: [true, '貓咪被預約狀態必填']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('products', schema)
