const res = require("express/lib/response");

const User = require("../models").User;

module.exports.createUser =(req,res) =>{
    console.log(req.body);
    if(req.body === null || req.body === {}) {
        return res.status(422).json({
            "message" : "Invalid Input"
        })
    }else {
        console.log('not empty', req.body);
    }
    
    let email = req.body.email;
    let phone_number = req.body.phone_number;
    let password = req.body.password;
    let users = new User({
        email,
        phone_number,
        password
    })
    users.save().then((data) => {
        //res.send(data)
        res.status(201).json({
            "message": "Giftcard user created successfully"
        });
    });

}
module.exports.getUser = (req,res) => {
    try{
        User.findAndCountAll().then((data)=>{
            res.status(200).json({
                "status": "success",
                "message": "Giftcard users list",
                "data": data
            });
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "status": "failed",
            "message": error
        })
    }
}
