import Order from '../models/order.js'
import { StatusCodes } from 'http-status-codes'

export const create = async (req, res) => {
  try {
    // 檢查指定日期和時段的預約數量
    const existingOrders = await Order.find({
      date: req.body.date,
      timeSlot: req.body.timeSlot
    })

    if (existingOrders.length >= 4) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: '該時段已滿'
      })
    }

    // 建立新的預約
    await Order.create({
      user: req.user._id,
      date: req.body.date,
      timeSlot: req.body.timeSlot,
      numPeople: req.body.numPeople // 新增預約人數
    })

    res.status(StatusCodes.OK).json({
      success: true,
      message: '預約成功'
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}

export const get = async (req, res) => {
  try {
    const result = await Order.find({ user: req.user._id })
    res.status(StatusCodes.OK).json({
      success: true,
      message: '',
      result
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}

export const getAll = async (req, res) => {
  try {
    const result = await Order.find().populate('user', 'account')
    res.status(StatusCodes.OK).json({
      success: true,
      message: '',
      result
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}

export const remove = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(StatusCodes.OK).json({
      success: true,
      message: '刪除成功'
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}
