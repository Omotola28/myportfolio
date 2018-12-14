import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import Mailgun from 'mailgun-js';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import nodemailerTransport from 'nodemailer-mailgun-transport';

const auth ={
  auth: {
    api_key: 'bc4b140085c245fcde786cfe81a097bc-4412457b-648bf3d6',
    domain: 'sandbox773c0b63d36548ce980f5c000059eaf7.mailgun.org'
  }
}
//import cors from 'cors';

const nodemailerMailgun = nodemailer.createTransport(nodemailerTransport(auth));
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../public/index.html'));
});

app.post('/inbox', (req,res) => {

  req.setTimeout(0);

  nodemailerMailgun.sendMail({
  from: req.body.email,
  to: 'omotolashogunle@gmail.com',
  subject: req.body.subject,

  html: `<p>${req.body.message}</p>`,
    //You can use "text:" to send plain-text content. It's oldschool!
  text: 'Mailgun rocks, pow pow!'
  //You can use "text:" to send plain-text content. It's oldschool!
  }, function (err, info) {
  if (err) {
    console.log('Error: ' + err);
    //next(err);
      res.json(err);
     //res.send(err);
  }
  else {
    console.log('Response: ' + info);
    //res.render('/inbox', {msg:'Sent'});
    res.json(info);
  }
  });

    /*//console.log(req.body);
      const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
              <li> Name ${req.body.name}</li>
              <li> Email ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
      `

      const transporter = nodemailer.createTransport({
          host: 'mxb.mailgun.org.s',
          port: 587,
          auth: {
              user: 'hw5o6shamn4tqjlx@ethereal.email',
              pass: 'asFQPK2p1Qpqe95SKG'
          }
      })

      let mailOptions = {
               from: req.body.email,
               to: 'hw5o6shamn4tqjlx@ethereal.email', // list of receivers
               subject: req.body.subject, // Subject line
               text: req.body.message,
               html: htmlEmail
      };

      transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message sent: %s', info.message);
              
              console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          });*/
})





app.listen(port, function(err) {
  if (err) {
    console.log(err.response);
  } else {
    console.log("Server is running");
    open(`http://localhost:${port}`);
  }
});