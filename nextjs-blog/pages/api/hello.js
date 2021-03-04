const validator = require('email-validator');

export default function handler(req, res) {
  const email = req.query.email || null;
  const isValid = validator.validate(email);
  if (isValid) {
    res.status(200).json({ email: email })
    console.log('email', email);
  }
  else {
    res.status(403).json({ error: 'email not valid'})
  }
}
