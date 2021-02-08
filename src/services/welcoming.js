"use strict";

require("dotenv").config();
const nodemailer = require("nodemailer");
let { user } = require("../db/models");

const welcoming = async () => {
  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILERHOST,
    port: process.env.NODEMAILERPORT,
    auth: {
      user: process.env.NODEMAILERUSER,
      pass: process.env.NODEMAILERPASSWD,
    },
  });

  const datas = await user.findAll({
    where: {
      role: "user",
    },
  });

  let resultEmail = datas.map((data) => data.email);
  let resultEmails = resultEmail.join();

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"info" <info@kreatiflabs.id>', // sender address
    to: `${resultEmails}`, // list of receivers
    subject: "Siap - siap ada ledakan Buku Murah !", // Subject line
    text: "Bazar Buku sekarang Dibuka", // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = welcoming;
