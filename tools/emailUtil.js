const emailConfig = require('./emailConfig')();
const mailgun = require('mailgun-js')(emailConfig);

/*exports.sendEmail = (recipient, message, attachment) =>
  new Promise((resolve, reject) => {
    const data = {
      from: 'postmaster@sandbox773c0b63d36548ce980f5c000059eaf7.mailgun.org',
      to: 'omotolashogunle@gmail.com',
      subject: message.subject,
      text: message.text,
      inline: attachment,
      html: message.html,
    };

    mailgun.messages().send(data, (error) => {
      alert("whats happwnin");
      if (error) {
        console.log(error, data);
        return reject(error);
      }
      return resolve();
    });
  });

*/