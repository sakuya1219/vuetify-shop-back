import Reservation from '../models/reservation.js'
import { StatusCodes } from 'http-status-codes'

export const create = async (req, res) => {
  try {
    const reservation = await Reservation.create({
      user: req.user._id,
      date: req.body.date,
      timeSlot: req.body.timeSlot
    })
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: '預約成功',
      result: reservation
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '預約失敗'
    })
  }
}

export const getAll = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user', 'account')
    res.status(StatusCodes.OK).json({
      success: true,
      result: reservations
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '獲取預約失敗'
    })
  }
}

export const getId = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate('user', 'account')
    if (!reservation) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: '預約不存在'
      })
    }
    res.status(StatusCodes.OK).json({
      success: true,
      result: reservation
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '獲取預約失敗'
    })
  }
}

export const remove = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id)
    if (!reservation) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: '預約不存在'
      })
    }
    res.status(StatusCodes.OK).json({
      success: true,
      message: '刪除成功'
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '刪除失敗'
    })
  }
}
