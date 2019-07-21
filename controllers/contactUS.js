'use strict'

const nodemailer = require('nodemailer');

const contactUs = async (user, callback) => {
   var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
         user: "ramuggeador@gmail.com", // generated ethereal user
         pass: "kNtP,jv>" // generated ethereal password
      }
   });

   // setup email data with unicode symbols
   let mailOptions = {
      from: '"Urquiza web contacto 👻" <ramuggeador@gmail.com>', // sender address
      to: "keltecokno@desoz.com", // list of receivers
      subject: `Nueva consulta ${user.subject} ✔`, // Subject line
      text: "Hello world?", // plain text body
      html: `<h3> Consulta enviada desde urquiza web.<h3><br>
    <p>     Informacion <br>
            nombre: ${user.name},<br> 
            Email:  ${user.email},<br>
            Mensaje: ${user.message}
    </p>` // html body
   };
   // send mail with defined transport object
   const info = await transporter.sendMail(mailOptions)
   callback(info)
}
//contactUs().catch(console.error);

module.exports = contactUs