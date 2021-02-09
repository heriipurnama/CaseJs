"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");
const Queue = require("bull");
const { setQueues, BullAdapter } = require("bull-board");

let { user } = require("../db/models");

const sendMailWelcomingQueque = new Queue("sendMailWelcoming");
const sendMailCronJobQueque = new Queue("sendMailCronJob");
setQueues([
  new BullAdapter(sendMailWelcomingQueque),
  new BullAdapter(sendMailCronJobQueque),
]);

class ServiceQueueSendMail {
  static transporter = () => {
    nodemailer.createTransport({
      host: process.env.NODEMAILERHOST,
      port: process.env.NODEMAILERPORT,
      auth: {
        user: process.env.NODEMAILERUSER,
        pass: process.env.NODEMAILERPASSWD,
      },
    });
  };

  static welcomingEmail = (email) => {
    sendMailWelcomingQueque.add({ mail: email });
    return {
      from: '"info" <info@kreatiflabs.id>',
      to: `${email}`,
      subject: `Welcome ${email}`,
      text: `Welcome ${email}`,
    };
  };

  static CronjobEmail = (email) => {
    sendMailCronJobQueque.add({ datas: email });
    return {
      from: '"info" <info@kreatiflabs.id>',
      to: `${email}`,
      subject: "Siap - siap ada ledakan Buku Murah !",
      text: "Bazar Buku sekarang Dibuka",
    };
  };

  static sendMailWelcomingQueque = () => {
    sendMailWelcomingQueque.process(async function (job, done) {
      try {
        await transporter.sendMail(welcomingEmail(job.data.mail));
        done();
      } catch (error) {
        console.log(error);
        done();
      }
    });
  };

  static sendMailCronJobQueque = () => {
    sendMailCronJobQueque.process(async function (done) {
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
        done();
      }
    });
  };
}

module.exports = ServiceQueueSendMail;
