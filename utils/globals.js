const GENDER_REGEX = /(FE)?MALE/
const MATRIC_REGEX = /AUL\/(SCI|SMS|HMU){1}\/[0-9]{2}\/[0-9]{5}/;

const role = {
    USER: "USER",
    ADMIN: "ADMIN"
}

module.exports = {
    GENDER_REGEX,
    MATRIC_REGEX,
    role
}