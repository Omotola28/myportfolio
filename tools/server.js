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


const nodemailerMailgun = nodemailer.createTransport(nodemailerTransport(auth));


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
    console.log(err.response);
  } else {
    console.log("Server is running");
    open(`http://localhost:${port}`);
  }
});