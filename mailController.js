const nodemailer = require('nodemailer');

const emailSender = (req,resp)=> {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kaduwalihini@gmail.com',
            pass: 'rpxt dvhk xqxx gffo'
        }
    });

    var mailOptions = {
        from: 'dentalcarepro0@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            resp.status(200).send('Email sent');
        }
    });
}

module.exports={emailSender};