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
        const currentYear = parseInt(dateformat[3]);
        const currentMonth = dateformat[1];
        const currentDay = parseInt(dateformat[2]);

        var count = 0;
        while (count<homes.length) {

            for (var i=0;i<homes[count].bills.length;i++){
                const billDueDate = homes[count].bills[i].due;
                const dueString = billDueDate.split(" ",4);
                let billDay = parseInt(dueString[2]);

                if ( currentMonth === 'Jan' || 'Mar' || 'May' || 'Jul' || 'Aug' || 'Oct' || 'Dec' ) {
                    if ( currentDay === 29 ) {
                        currentDay = -2;
                    };
                    if ( currentDay === 30 ) {
                        currentDay = -1;
                    };
                    if ( currentDay === 31 ) {
                        currentDay = 0;
                    };
                }
                if ( currentMonth === 'Apr' || 'Jun' || 'Sept' || 'Nov' ) {
                    if ( currentDay === 28 ) {
                        currentDay = -2;
                    };
                    if ( currentDay === 29 ) {
                        currentDay = -1;
                    };
                    if ( currentDay === 30 ) {
                        currentDay = 0;
                    };
                }
                if ( currentYear % 4 === 0 ) {
                    if ( currentMonth === 'Feb' ) {
                        if ( currentDay === 27 ) {
                            currentDay = -2;
                        };
                        if ( billDay === 28 ) {
                            currentDay = -1;
                        };
                        if ( billDay === 29 ) {
                            currentDay = 0;
                        };
                    }
                }
                else {
                    if ( currentMonth === 'Feb' ) {
                        if ( currentDay === 26 ) {
                            currentDay = -2;
                        };
                        if ( currentDay === 27 ) {
                            currentDay = -1;
                        };
                        if ( currentDay === 28 ) {
                            currentDay = 0;
                        };
                    }
                }
                
                if ((currentDay + 3) === billDay) {
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
        const heroEM = process.env.SPLITIT_EMAIL || "";
        const heroPW = process.env.SPLITIT_PW || "";

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: heroEM, // Your email id
                pass: heroPW // Your password
            }
        });
        var mailOptions = {
            from: heroEM, // sender address
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