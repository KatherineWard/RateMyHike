'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const postEvents = require('./posts/events.js')
// styles
// require('./assets/styles/index.scss')
// require('./assets/scripts/auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#cp').hide()
  $('#sp').hide()
  $('#show-posts').hide()
  $('#cpButton').hide()
  $('#sign-out-button').hide()
  postEvents.addHandlers()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#cp-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('click', authEvents.onSignOut)
})
