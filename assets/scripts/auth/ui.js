'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#signUpModalLabel').html('You are signed up! Press close and sign-in to play!')
  document.getElementById('sign-up-form').reset()
}

const signUpError = function () {
  $('#signUpModalLabel').html('You are not signed up! Try Again!')
  // setTimeout(function () {
  //   $('#signUpModalLabel').html('')
  // }, 5000)
  document.getElementById('sign-up-form').reset()
}

const signInSuccess = function (response) {
  $('#signInModalLabel').html('You are signed in! Press close to start rating!')
  store.user = response.user
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#cpButton').show()
  $('#sign-out-button').show()
  $('#cp').show()
  $('#sp').show()
  document.getElementById('sign-in-form').reset()
}
const signInError = function (response) {
  $('#signInModalLabel').html('Please try again!')
  setTimeout(function () {
    $('#signInModalLabel').fadeOut().empty()
  }, 4000)
  document.getElementById('sign-in-form').reset()
}

const changePasswordSuccess = function (response) {
  $('#cpModalLabel').html('Your password is changed!')
  setTimeout(function () {
    $('#cpModalLabel').fadeOut().empty()
  }, 4000)
  document.getElementById('cp-form').reset()
}

const changePasswordError = function (response) {
  $('#cpModalLabel').html('Your password is not changed! Try again.')
  setTimeout(function () {
    $('#cpModalLabel').fadeOut().empty()
  }, 4000)
  document.getElementById('cp-form').reset()
}

const signOutSuccess = function (response) {
  $('#sign-out-announcer').html('You are signed out!')
  setTimeout(function () {
    $('#sign-out-announcer').fadeOut().empty()
  }, 5000)
  delete store.user
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#cp').hide()
  $('#sp').hide()
  $('#cpButton').hide()
  $('#sign-out-button').hide()
  $('#announcer').html('')
  $('#cpModalLabel').html('')
}
const signOutFailure = function (response) {
  $('#announcer').html('You are not signed out! Try again.')
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
