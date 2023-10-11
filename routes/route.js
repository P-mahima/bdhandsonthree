const router = require("express").Router()
const userData = require('../controller/controller')


router.post("/newuseradd", userData.addNewUser)
router.get("/findnewuser", userData.findUser)
router.get("/findusersalary", userData.findUserSalary)
router.get("/finduserexp", userData.findUserExp)
router.get("/finduserhrndexp", userData.findUserGrndExp)
router.put("/usersalary", userData.updateUserSalary)
router.delete("/deleteuser", userData.DeleteUser)


module.exports = router