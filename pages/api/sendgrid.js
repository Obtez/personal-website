import sendgrid from "@sendgrid/mail";

const EMAIL = process.env.EMAIL;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

if (SENDGRID_API_KEY) {
  sendgrid.setApiKey(SENDGRID_API_KEY);
}

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: EMAIL,
      from: EMAIL,
      subject: `Email from ${req.body.name}`,
      html: `<div>${req.body.message}</div> <div>Email: ${req.body.email}</div>`
    })
  } catch (err) {
    return res. status(err.statusCode || 500).json({error: err.message})
  }
  return res.status(200).json({ err: "" });
}

export default sendEmail;