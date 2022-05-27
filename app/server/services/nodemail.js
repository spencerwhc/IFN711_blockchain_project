const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEtherealEmail(receiver) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"HiQ" <qut.students@qut.edu.au>', // sender address
        to: receiver, // list of receivers
        subject: "Authenticate Skills Report for Ho Sze Wong", // Subject line
        html: "<h1>Authenticated Skills Assessment</h1><p>To whom it may concern,</p><p>This is an email sent from Queensland University of Techonology, we have received a request to share skills report for student Ho Sze Wong, who are studying Master of Information techonology.</p> <p>Please find the following attachment for your reivew. It is authenticated by QUT student adminstrator. If you have any problem, please contact www.qut.edu.au</p><p>Kind regards,</p><p>Karen Jen</p>",
        attachments: [
            {
                filename: "Skills_Report_a83c33.pdf",
                path: "/Users/ianmcateer/Desktop/Skills_Report_a83c33.pdf", // Demo PDF
            },
        ],
    });

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return nodemailer.getTestMessageUrl(info);
}

module.exports = {
    sendEtherealEmail,
};

function sendEmail(receiver, user) {
    const mail = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user,
            pass: user.pass,
        },
    });
    const mailOptions = {
        from: user,
        to: receiver,
        subject: "Authenticate Skills Report for Ho Sze Wong",
        html: "<h1>Authenticated Skills Assessment</h1><p>To whom it may concern,</p><p>This is an email sent from Queensland University of Techonology, we have received a request to share skills report for student Ho Sze Wong, who are studying Master of Information techonology.</p> <p>Please find the following attachment for your reivew. It is authenticated by QUT student adminstrator. If you have any problem, please contact www.qut.edu.au</p><p>Kind regards,</p><p>Karen Jen</p>",
        attachments: [
            {
                filename: "Skills_Report_a83c33.pdf",
                path: "/Users/ianmcateer/Desktop/Skills_Report_a83c33.pdf",
            },
        ],
    };

    mail.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}
