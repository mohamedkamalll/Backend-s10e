const userController = require("../controller/userController")
const {Router} = require("express")
const router = Router()


router.get("/getUsers",userController.getUsers)
     
router.post("/addUser",userController.addUser)

router.post("/deleteUser",userController.deleteUser)

module.exports = router;