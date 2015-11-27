module.exports = {
  port: 8080,
  date:{
    format: 'yyyy-MM-DD'
  },
  msg:{
    '404': "Entity not found with id: ",
    'error': "An error occured"
  },

  email:{
    account: 'torcebot@gmail.com',
    pass: process.env.MAILPASS,
    to: 'harjuto@gmail.com'
  }
}
