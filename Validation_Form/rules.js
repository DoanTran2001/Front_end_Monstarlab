const rules = {
  email: {
    validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    messageError: 'Email không đúng định dạng'
  },
  name: {
    validate: /^[\p{L}\s]+$/u,
    messageError: 'Tên không đúng định dạng'
  },
  password: {
    validate: /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
    messageError: 'Mật khẩu phải từ 8 - 32 ký tự, ít nhất 1 chữ hoa và 1 chữ thường'
  },
  confirm_password: {
    validate: /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
    messageError: 'Mật khẩu phải từ 8 - 32 ký tự, ít nhất 1 chữ hoa và 1 chữ thường'
  }
}