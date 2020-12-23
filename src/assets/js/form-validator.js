const formValidator = {
  name: [{
      required: true,
      message: 'Введите ФИО!',
      trigger: 'blur'
    },
    {
      type: 'string',
      pattern: /^[A-Z,a-z,а-я,А-Я]+$/,
      message: 'Не допустимые символы!'
    }
  ],
  phone: [{
      pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      message: 'Не корректный номер',
      trigger: 'blur'
    },
    {
      required: true,
      message: 'Введите Номер!',
      trigger: 'blur'
    }
  ],
  email: [{
      required: true,
      message: 'Введите Email!',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: 'Не корректный Email адресс!',
      trigger: 'blur'
    }
  ],
  country: [{
    validator: (rule, value) => value !== 'Страна',
    message: 'Выберите страну',
    trigger: 'blur'
  }],
  region: [{
    validator: (rule, value) => value !== 'Регион',
    message: 'Выберите регион',
    trigger: 'blur'
  }],
  city: [{
    validator: (rule, value) => value !== 'Город',
    message: 'Выберите город',
    trigger: 'blur'
  }]
}

export default formValidator