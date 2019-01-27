
const express = require('express');
var rp = require('request-promise');
const cors = require('cors');
var fs = require('fs');
var https = require('https');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const secret = '6Lepj4YUAAAAAAkRXCXD5fJqLLvkFju6zlMsGvhz';

var transporter = nodemailer.createTransport({
    host: 'cp17.domains.co.za',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'admin@socialspace.co.za',
        pass: 'WeedWhacker2018'
    }
});

app.get('/test', (req, res) => {
	res.send("Server is responding");
});

app.post('/validate_captcha', (req, res) => {
    console.log("NEW CAPTCHA VALIDATION");
    var verify = req.body.response;
    console.log(req.body.response);
	const options = {
		method: 'POST',
		uri: 'https://www.google.com/recaptcha/api/siteverify',
		qs: {
			secret,
			response: verify
	  	},
	  	json: true
	};
	
	rp(options)
		.then(response => res.json(response))
		.catch(() => {console.log('captcha verification response error')});
	});

  app.post('/email', (req, res)=>{
    console.log("new email request for: "+ email );
	var name = req.body.name;
	var email = req.body.emailAddress;
	var details = req.body.details;
	var instagram = req.body.instagram;

	var obj = { name, email, details, instagram };
	var htmlOUT = '<h4>Cleint name: </h4><h3>'+name+'</h3>' + '<hr/><br/><h4>Contact email: </h4><h3>' +email+ '<h3>' + '<hr/><br/><h4>Details: </h4>' + '<h3>'+details+'</h3>' + '<hr/><br/>' + '<h4>IG handle: </h4><h3>@'+instagram+'</h3>';

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'admin@socialspace.co.za',
        to: 'info@socialspace.co.za',
        subject: 'NEW CLIENT EMAIL',
        text: '',
        html: htmlOUT
    };
   
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.send({success: error});
        }
        console.log('Message sent: %s', info.messageId);
        res.send({success:"Message successfully sent"});
    });

});



https.createServer(
    {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./ssl.pem')
    }, app
    )
.listen(3000 ,function(){console.log("server listening on port 3000")});


