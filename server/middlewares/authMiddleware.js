const express = require('express');
const jwt = require("jsonwebtoken");
const users = require("../models/users");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');
const saltRounds = 10;

// SignUp
const signUpUser = async(req, res, next) => {
    let data;
    try {
        const {email, password, username, birth_date, gender, zip_code, number_of_children} = req.body;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const newUser = {email, "password":hashPassword, username, birth_date, gender, zip_code, number_of_children, login:true}
        data = await users.createUser(newUser);
        console.log(data)
        await users.updateUser(email);
        await users.logInUserTrue(email);
        console.log(email)

        req.user = {email};
        next();

    } catch (error) {
        console.log('Error:', error);
    }
};

// Login
const checkEmailLogIn = async(req, res, next) => {
    let {email, password} = req.body;
    try {
        let data = await users.getUsersByEmail(email);
        if(!data){
            console.log("This email do not have an account");
            res.status(401).json({"success": false, "msj":"This email do not have an account"});
        } else {
            const match = await bcrypt.compare(password, data[0].password);
            if(match){
                await users.logInUserTrue(email);
                req.user = {email};
                console.log("++++++>>>", data);
                next();
            } else {
                res.status(400).json({ msg: 'Incorrect user or password'})
            }
        }

    } catch (error) {
        console.log('Error:', error);
    }
}

const authCheck = (req, res, next) => {
    const token = req.cookies["access-token"];
    if(token){
        jwt.verify(token, jwtSecret, async (err, decoded) => {
            
            let {email} = decoded;
            let data = await users.getUsersByEmail(email);
            console.log(data);
            
            if(data[0].login == true) {
                req.decoded = decoded;
                req.decoded.data = data;
                next();
            } else {
                    res.clearCookie("access-token").end();
                };
            })
        
    } else {
        console.log("Token not provided");
    }
}

module.exports = {
    signUpUser,
    checkEmailLogIn,
    authCheck
}