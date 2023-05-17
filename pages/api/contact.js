import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function Contact(req, res){
    if(req.method !== "POST"){
        return res.status(400).json({ error: "Invalid request method"})
    }
    const { name, email, message } = req.body;
    if(!name || !email || !message){
        return res.status(400).json({ error: "Missing request body"})
    }
    try {
        const response = await sendgrid.send({
          to: process.env.CONTACT_FORM_RECIPIENT, // Your email where you'll receive emails
          from: process.env.CONTACT_FORM_SENDER, // your website email address here
          subject: `Portfolio Website Email - ${name}: ${email}`,
          html: `<div>${name} emailed you through your portfolio contact me page. <br/><br/>Name: ${name}<br/>Email: ${email}<br/>Message: <br/>${message}</div>`,
        });
        return res.status(200).json("Email Sent")
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
}