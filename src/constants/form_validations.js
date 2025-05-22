const messages = {
  name: {
    required: 'This field is required',
    wrong: 'Wrong format, letters only'
  },
  number: {
    required: 'Can’t be blank',
    wrong: 'Wrong format, numbers only'
  },
  month: {
    required: 'Can’t be blank',
    wrong: 'Invalid month'
  },
  year: {
    required: 'Can’t be blank',
    wrong: 'Invalid year'
  },
  cvc: {
    required: 'Can’t be blank',
    wrong: 'Invalid CVC'
  }
};
const patterns = {
  //   pedi las exp reg a jose
  onlyLetters: /^[A-Za-z]+$/,
  onlyNumbers: /^\d+$/,
  month: /^(0[1-9]|1[0-2])$/,
  year: /^\d{2}$/,
  cvc: /^\d{3}$/
};

const nameValidations = {
  required: messages.name.required,
  pattern: {
    value: patterns.onlyLetters,
    message: messages.name.wrong
  }
};

const numberValidations = {
  required: messages.number.required,
  pattern: {
    value: patterns.onlyNumbers,
    message: messages.number.wrong
  }
};
const monthValidations = {
  required: messages.month.required,
  pattern: {
    value: patterns.month,
    message: messages.month.wrong
  }
};

const yearValidations = {
  required: messages.year.required,
  pattern: {
    value: patterns.year,
    message: messages.year.wrong
  }
};

const cvcValidations = {
  required: messages.cvc.required,
  pattern: {
    value: patterns.cvc,
    message: messages.cvc.wrong
  }
};

export const FORM_VALIDATIONS = {
  NAME: nameValidations,
  NUMBER: numberValidations,
  MONTH: monthValidations,
  YEAR: yearValidations,
  CVC: cvcValidations
};
