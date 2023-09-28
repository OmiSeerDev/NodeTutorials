const bcrypt = require('bcrypt');
const moment = require('moment');
const sharp = require('sharp');

// Encripta contraseñas
let pwd = 'elcoñodetumadre666!';

bcrypt.hash(pwd,5, (error, hash)=>{
    if (!hash){console.log(error);}
    console.info(hash);
    
    bcrypt.compare('Laputa?', hash, (err, res)=>{
        console.info(res)
    })
});

// Manejo de tiempo
let ahora = moment();
console.info(ahora.format('YYYY-MM-DD HH:mm').toString());

//Manejo de imagen
sharp('Hash.jpg')
    .resize(40)
    .toFile('Hashimo.jpg');

