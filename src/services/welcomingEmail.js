"use strict";

require("dotenv").config();
const nodemailer = require("nodemailer");
const Queue = require("bull");
const QueueMQ = require("bullmq");
const { setQueues, BullMQAdapter, BullAdapter } = require("bull-board");

const welcomingEmail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILERHOST,
    port: process.env.NODEMAILERPORT,
    auth: {
      user: process.env.NODEMAILERUSER,
      pass: process.env.NODEMAILERPASSWD,
    },
  });

  const sendMailQueque = new Queue("sendMail", {
    redis: {
      host: "127.0.0.1",
      port: 6379,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"info" <info@kreatiflabs.id>', // sender address
    to: `${data}`, // list of receivers
    subject: `Welcome ${data}`, // Subject line
    text: `Welcome ${data}`, // plain text body
  });

  setQueues([new BullAdapter(sendMailQueque)]);

  const options = {
    delay: 60000, // 1 min in ms
    attempts: 2,
  };
  sendMailQueque.process(function (job, done) {
    console.log('job', job);
    const sendEmail = await info(job)
    done();
  });
  sendMailQueque.add(info);

 

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = welcomingEmail;
