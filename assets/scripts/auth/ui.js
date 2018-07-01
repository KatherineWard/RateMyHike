'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#signUpModalLabel').html('You are signed up! Press close and sign-in to play!')
  document.getElementById('sign-up-form').reset()
}
const signUpError = function () {
  $('#announcer').html('You are not signed up! Try again').toggle(6000)
  document.getElementById('sign-up-form').reset()
}

const signInSuccess = function (response) {
  $('#signInModalLabel').html('You are signed in! Press close to start rating!')
  // document.getElementById('sign-in-form').reset()
  store.user = response.user
}
const signInError = function (response) {
  $('#announcer').html('Please try again!').toggle(6000)
  document.getElementById('sign-in-form').reset()
}

const changePasswordSuccess = function (response) {
  $('#cp-message').html('Your password is changed!').toggle(6000)
  document.getElementById('change-password-form').reset()
}

const changePasswordError = function (response) {
  $('#cp-message').html('Your password is not changed! Try again.').toggle(6000)
  document.getElementById('change-password-form').reset()
}

const signOutSuccess = function (response) {
  $('#announcer').html('You are signed out!').toggle(6000)
  $('#hidden').hide()
  $('#showFirst').show()
  $('#gameStatus').html('')
  $('.col').html('')
  $('#gameStats').html('')
  $('.col').off('click')
  delete store.user
}
const signOutFailure = function (response) {
  $('#announcer').html('You are not signed out! Try again.').toggle(6000)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordError

}
