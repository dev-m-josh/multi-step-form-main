
export default function Validator(values) {
    const errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const phone_pattern = /^\+?\d{10,13}$/;

    //name
    if (values.name === '') {
        errors.Name = "Name is required!"
    }

    //email
    if (values.email === '') {
        errors.Email = "Email is required!"
    }else if (!email_pattern.test(values.email)) {
        errors.Email = "Email is is not correct!"
    }

    //phone
    if (values.phone === '') {
        errors.Phone = "Phone number is required!"
    }else if (!phone_pattern.test(values.phone)) {
        errors.Phone = "Phone number is invalid!"
    }

console.log(errors)
  return (errors)
}
