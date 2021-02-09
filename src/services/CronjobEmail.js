"use strict";

require("dotenv").config();
const nodemailer = require("nodemailer");
const Queue = require("bull");
const { setQueues, BullAdapter } = require("bull-board");

let { user } = require("../db/models");

const sendMailQueque = new Queue("sendMailCronJob");
setQueues([new BullAdapter(sendMailQueque)]);

let transporter = nodemailer.createTransport({
  host: process.env.NODEMAILERHOST,
  port: process.env.NODEMAILERPORT,
  auth: {
    user: process.env.NODEMAILERUSER,
    pass: process.env.NODEMAILERPASSWD,
  },
});

const CronjobEmail = (email) => {
  sendMailQueque.add({ datas: email });
  return {
    from: '"info" <info@kreatiflabs.id>',
    to: `${email}`,
    subject: "Siap - siap ada ledakan Buku Murah !",
    text: "Bazar Buku sekarang Dibuka",
  };
};

sendMailQueque.process(async function (job, done) {
  try {
    const datas = await user.findAll({
      where: {
        role: "user",
      },
    });
    let resultEmail = datas.map((data) => data.email);
    let resultEmails = resultEmail.join();

    await transporter.sendMail(CronjobEmail(resultEmails));
    done();
  } catch (error) {
    console.log(error);
  }
});

module.exports = CronjobEmail;
