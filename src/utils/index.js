export default  {
  userEmail: {
    presence: true,
    format: {
      pattern: /^[A-Za-z\d@.]+$/,
      message: 'Invalid email!'
    },
    length: {
      maximum: 20,
      minimum: 5,
      message: 'Длина email должно быть больше 5 и меньше 20'
    }
  },
  password: {
    presence: true,
    format: {
      pattern: /^[a-z\d!_]+$/,
      message: 'Invalid password!'
    },
    length: {
      maximum: 10,
      minimum: 6,
      message: 'Длина password должно быть больше 6 и меньше 10'
    }
  },
  confirmPassword: {
    presence: true,
    format: {
      pattern: /^[a-z\d!_]+$/,
      message: 'Введенный вами пароль не совпадает'
    },
    length: {
      maximum: 10,
      minimum: 6,
      // message: ''
    }
  },
}
