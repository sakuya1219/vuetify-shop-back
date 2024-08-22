import User from '../models/user.js' // 修改为使用 User 模型

// 获取所有用户
export const getAllAccounts = async (req, res) => {
  try {
    const users = await User.find() // 从 User 模型中查找
    res.status(200).json({ success: true, result: users })
  } catch (error) {
    res.status(500).json({ success: false, message: '無法獲取會員資料' })
  }
}

// 删除账户
export const deleteAccount = async (req, res) => {
  try {
    const accountId = req.params.id
    await User.findByIdAndDelete(accountId) // 从 User 模型中删除
    res.status(200).json({ success: true, message: '會員已刪除' })
  } catch (error) {
    res.status(500).json({ success: false, message: '無法刪除會員' })
  }
}
