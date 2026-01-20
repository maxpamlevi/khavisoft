'use server'

export async function submitConsultation(prevState: any, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const details = formData.get('details')

  // Basic server-side validation
  if (!name || !email || !phone) {
    return {
      success: false,
      message: 'Vui lòng điền đầy đủ thông tin bắt buộc.',
    }
  }

  const message = `
🔔 **Yêu cầu tư vấn mới erp**
👤 **Tên:** ${name}
📧 **Email:** ${email}
📞 **SĐT:** ${phone}
📝 **Chi tiết:** ${details || 'Không có chi tiết'}`

  const token = '7288669034:AAHyptqP9ipmHNTxVRDZIhfXQWNjCqXX81w'
  const chatId = '1739177113'

  if (!token || !chatId) {
    console.error('Telegram env vars missing')
    return {
      success: false,
      message: 'Lỗi cấu hình hệ thống. Vui lòng liên hệ trực tiếp.',
    }
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    if (!res.ok) {
      throw new Error('Failed to send telegram message')
    }

    return {
      success: true,
      message: 'Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ sớm.',
    }
  } catch (error) {
    console.error('Error sending telegram message:', error)
    return {
      success: false,
      message: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
    }
  }
}
