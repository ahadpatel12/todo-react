

export function emailValidation(register) {
  return register('email', {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address"
    }
  });
}


export function passwordValidation(register) {
  return register('password', {
    required: true,
    minLength: {
      value: 6,
      message: "Password length must be greater than 6"
    }
  });
}

export function confirmPasswordValidation(register, watch) {
  return register('confirm_password', {
    required: true,
    validate: (val) => {
      if (watch('password') !== val) {
        return "Your passwords do no match";
      }
    },
  });
}