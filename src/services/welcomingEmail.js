"use strict";

require("dotenv").config();
const nodemailer = require("nodemailer");
const Queue = require("bull");
const { setQueues, BullAdapter } = require("bull-board");

const welcomingEmail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILERHOST,
    port: process.env.NODEMAILERPORT,
    auth: {
      user: process.env.NODEMAILERUSER,
      pass: process.env.NODEMAILERPASSWD,
    },
  });

  let info = transporter.sendMail({
    from: '"info" <info@kreatiflabs.id>',
    to: `${data}`, 
    subject: `Welcome ${data}`,
    text: `Welcome ${data}`
  });

  
  sendMailQueque.add(info);
  
};



const sendMailQueque = new Queue("sendMail", {
  redis: {
    host: "127.0.0.1",
    port: 6379,
  },
});
sendMailQueque.process(async function (job, done) {
  // console.log('job', job);
 
  done();
});
const options = {
  delay: 60000, // 1 min in ms
  attempts: 2,
};

setQueues([new BullAdapter(sendMailQueque)]);

module.exports = welcomingEmail;
