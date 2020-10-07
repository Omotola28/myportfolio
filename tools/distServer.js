import express from 'express';
import path from 'path';
import open from 'open';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import nodemailerTransport from 'nodemailer-mailgun-transport';
import ENV from 'dotenv';

ENV.config();

const auth ={
  auth: {
    api_key: process.env.REACT_APP_MAILGUN_API_KEY,
    domain: process.env.REACT_APP_MAILGUN_DOMAIN
  }
}


const nodemailerMailgun = nodemailer.createTransport(nodemailerTransport(auth));


const port = 80;
const app = express();

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.post('/inbox', (req,res) => {

  req.setTimeout(0);

  nodemailerMailgun.sendMail({
  from: req.body.email,
  to: process.env.REACT_APP_DOMAIN_EMAIL,
  subject: req.body.subject,

  html: `<p>${req.body.message}</p>`,
  text: 'Mailgun rocks, pow pow!'
  }, function (err, info) {
  if (err) {
    console.log('Error: ' + err);
      res.json(err);
  }
  else {
    console.log('Response: ' + info);
    res.json(info);
  }
  });

   
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`167.99.89.227:${port}`);
    console.log("Running......");
  }
});