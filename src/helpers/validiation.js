
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // eslint-disable-line
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const validation = {
  phoneRegrex: PHONE_REGEX,
  emailRegrex: EMAIL_REGEX
}

export default validation;