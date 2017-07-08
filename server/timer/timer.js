const nodemailer = require('nodemailer');
const Home = require('../models/Home');

function timer() {

    Home.find({})
        .populate(["bills", "roommates"])
        .exec(function(error, doc) {
          if (error) {
            res.send(error);
          }
          else {
            findDueDates(doc);
          }
    });

    function findDueDates(homes) {

        const needsNotify = [];
        const datestring = Date();
        const dateformat = datestring.split(" ", 4);
        const currentDay = parseInt(dateformat[2]);

        var count = 0;
        while (count<homes.length) {

            for (var i=0;i<homes[count].bills.length;i++){
                const billDueDate = homes[count].bills[i].due;
                const dueString = billDueDate.split(" ",4);
                const billDay = parseInt(dueString[2]);
                // console.log(homes[count].bills[i].due);

                if ((currentDay + 3) === billDay) {
                    console.log("Bill due!");
                    console.log(homes[count].roommates);
                    const dueBillInfo = {
                        name: homes[count].bills[i].name,
                        cost: homes[count].bills[i].cost,
                        due: homes[count].bills[i].due,
                        roommates: homes[count].roommates
                    }
                    needsNotify.push(dueBillInfo);
                }
            }
            count += 1;
        }
        formatEmails(needsNotify);
    } 

    function formatEmails(billList) {

        const emails = [];
        var count = 0;
        while (count<billList.length) {

            const billDueDate = billList[count].due;
            const dueString = billDueDate.split(" ",4);
            let text = "Hello from Splitit!\nYou have your "+billList[count].name+" bill due in 3 days on "+dueString+"\nHere are your totals:\n";

            for (var i=0;i<billList[count].roommates.length;i++){
                var cut = (billList[count].roommates[i].percentage/100)*billList[count].cost;
                var name = billList[count].roommates[i].name;
                text += name+": $"+cut+"\n";
            }

            const roomieEmails = [];
            for (var i=0;i<billList[count].roommates.length;i++) {
                roomieEmails.push(billList[count].roommates[i].email);
            }
            var email = {
                'emails': roomieEmails,
                'text': text
            };
            emails.push(email);
            count += 1;
        }
        prepareEmails(emails);

    }

    function prepareEmails(emails) {

        var count = 0;
        while (count<emails.length) {
            for (var i=0;i<emails[count].emails.length;i++){
                sendEmail(emails[count].emails[i], emails[count].text);
            }
            count += 1;
        }
    }

    function sendEmail(email, text) {

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'thesplititco@gmail.com', // Your email id
                pass: 'Heythere01' // Your password
            }
        });
        var mailOptions = {
            from: 'thesplititco@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Splitit Bill Alert!', // Subject line
            text: text
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                // res.json({yo: 'error'});
            } else {
                console.log('Message sent: ' + info.response);
                // res.json({yo: info.response});
            }
        });
    }
}

module.exports = timer;