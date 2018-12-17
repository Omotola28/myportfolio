const express = require('express');
const sendMail = express.Router();
const emailUtil = require('./emailUtil');

const { sendEmail } = emailUtil;

/*
sendMail.post('/inbox', async (req, res, next) => {
  const { recipient, message } = req.body;
  try {
      await sendEmail(recipient, message);
      res.json({message: 'Your query has been sent'});
      await next();
     } catch (e) {
      await next(e);
   }
 });
module.exports = sendMail;
*/


