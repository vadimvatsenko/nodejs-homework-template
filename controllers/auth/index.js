const login = require("./login");
const register = require("./register");
const getCurrent = require("./current");
const logout = require("./logout");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./updateAvatar")
const { controllersWrapper } = require("../../helpers/");


module.exports = {
    login: controllersWrapper(login),
    register: controllersWrapper(register),
    getCurrent: controllersWrapper(getCurrent),
    logout: controllersWrapper(logout),
    subscription: controllersWrapper(subscription),
    updateAvatar: controllersWrapper(updateAvatar),
    verifyEmail: controllersWrapper(verifyEmail),

}