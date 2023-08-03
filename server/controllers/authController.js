const express = require('express');
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const users = require('../models/users');
require("dotenv").config();


/** 
  * <pre>
  * Autenticación de usuarios, Login y Logout. Creación de Token para encriptación de contraseña. Destruye la sesion y limpia la cookies y cambia el estado del usuario a login false en BBDD
  * </pre>
  * @memberof controllers 
  * @method createAndStoreToken
  * @method destroySessionAndClearCookies
  * @async 
  * @param {Object} req objeto de petición HTTP
  * @param {Object} res objeto de respuesta HTTP
  * @return {json} 
  * @throws {token} 
  */


const createAndStoreToken = (req,res)=>{
    
    const payload = {
        isLogged: true,
        email: req.user.email
    };
    console.log(payload);

    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: "7d"
    });

    res.status(200)
    .cookie("access-token", token)
    .json({ success: true, message: "Token created and stored successfully" });
}

// CONTROLLER LOGOUT
// Destruye la sesion y limpia la cookies
const destroySessionAndClearCookies = (req, res) => {
    // Cambiar el estado del usuario a login false
    let email = req.decoded.email;
    users.logInUserFalse(email);

    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").end();
    });
}

module.exports = {
    createAndStoreToken,
    destroySessionAndClearCookies
}