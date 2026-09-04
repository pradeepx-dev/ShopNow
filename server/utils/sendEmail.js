const { Resend } = require('resend');


const sendEmail = async (email, subject, message) => {
    try{
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_PRODUCTION_EMAIL,
            to: email,
            subject: subject,
            html: message
        });
        if(error) {
            throw error;
        }
        console.log('Email sent successfully', data);
    }catch(error) {
        console.error('Error sending email:', error);
    }
}

module.exports = {sendEmail};
