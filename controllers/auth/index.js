const login = require("./login");
const register = require("./register");
const getCurrent = require("./current");
const logout = require("./logout")
const { controllersWrapper } = require("../../helpers/")

module.exports = {
    login: controllersWrapper(login),
    register: controllersWrapper(register),
    getCurrent: controllersWrapper(getCurrent),
    logout: controllersWrapper(logout)

}