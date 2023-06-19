var express = require("express");
var router = express.Router();
const admin = require('../src/model/admin')
const {
    issueJWT
} = require('../src/utils/token')
const bcrypt = require('bcryptjs');
const user = require("../src/model/user");

/* GET learners. */
router.get("/", function (req, res, next) {
  res.json({
    status: true,
    statusCode: 200,
    message: "Got the message",
    data: { name:"krishna"},
  });
});

/* POST learners. */
router.post("/signup", async function (req, res, next) {
  try {
    let {
      name,
      email,
      password,
      grade_level,
      area_of_study,
      skills
    } = req.body
   
    let checkUser = await admin.findOne({
        email
    })
    if (checkUser == null) {
    
        let userObject = new admin({
            name,
            email,
            password,
            grade_level,
            area_of_study,
            skills,
            is_verified: 0,
            is_deleted: 0
        })
        let saveUser = await userObject.save()
        if (saveUser) {
            res.json({
                status: true,
                statusCode: 201,
                message: "New Learner Created Successfully",
                data: saveUser
            })
        } else {
            res.json({
                status: false,
                statusCode: 400,
                message: "Something Went Wrong",
                data: ""
            })
        }

    } else {
        res.json({
            status: false,
            statusCode: 200,
            message: "This User Already Exits",
            data: ""
        })
    }
} catch (error) {
    res.json({
        status: false,
        statusCode: 400,
        message: error.message,
        data: ""
    })
}
}
);


/* POST Login */
router.post("/login", async function (req, res) {
    try {
        let {
            email,
            password,
        } = req.body

        let checkUser = await admin.findOne({
            email
        })
        if (checkUser) {
                    if (checkUser.password === password) {
                        // let updateOtp=await user.updateOne({_id : checkUser._id}, {$set :{is_verified:1}});
                        let payload = {
                            id: checkUser._id,
                            email: checkUser.email
                        }
                        let token = await issueJWT(payload)
                        res.json({
                            status: true,
                            statusCode: 200,
                            message: "User Login Successfully",
                            data: checkUser,
                            token: token
                        })
                    } else {
                        res.json({
                            status: false,
                            statusCode: 400,
                            message: "You Entered a Wrong Password .",
                            data: ""
                        })
                    }

        } else {
            res.json({
                status: false,
                statusCode: 200,
                message: "This User does not Exits",
                data: ""
            })
        } //close of valid user if else
    } catch (error) {
        res.json({
            status: false,
            statusCode: 400,
            message: error.message,
            data: ""
        })
    }
}
);


/* GET learners. */
router.get("/allUser", async function (req, res, next) {
    let checkUser = await user.find()
    res.json({
      status: true,
      statusCode: 200,
      message: "user list",
      data: checkUser,
    });
  });
module.exports = router;
