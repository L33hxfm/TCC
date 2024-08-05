const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_GMAIL,
    pass: process.env.SENHA_GMAIL,
  },
});

app.post('/recuperar-senha', (req, res) => {
  const { email } = req.body;
  const senhaTemporaria = Math.random().toString(36).slice(-8);

  const mailOptions = {
    from: process.env.EMAIL_GMAIL,
    to: email,
    subject: 'Recuperação de Senha',
    text: `Sua senha temporária é: ${senhaTemporaria}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Erro ao enviar email' });
    }
    res.status(200).send({ message: 'Email enviado com sucesso' });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
