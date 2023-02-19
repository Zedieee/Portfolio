export default function ContactApi(req, res) {
    require('dotenv').config();
    let nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'gargallocarnallabrianhermam@gmail.com',
          pass: process.env.password,
        },
        secure: true,
      })
      const mailData = {
        from: 'gargallocarnallabrianhermam@gmail',
        to: 'gargallocarnallabrianhermam@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
       }
       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
  }