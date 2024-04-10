const express = require('express')

const routes = express.Router()

const user = {
  username: 'akicode',
  avatar: 'https://avatars.githubusercontent.com/u/126093767?v=4',
  email: 'akicodeoficial@gmail.com',
  password: 'root',
};

routes.get('/', (req, res) => {
  return res.json({ message: 'ok' })
})

routes.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === '' || password === '') {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' })
  }

  if (email !== user.email || password !== user.password) {
    return res.status(401).json({ message: 'Email ou senha inválidos' })
  }

  return res.status(200).json(user);
})

module.exports = routes