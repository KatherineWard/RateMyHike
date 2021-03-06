'use strict'

const store = require('../store')
const config = require('../config')

const newPost = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/posts',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getPost = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/posts/' + store.post.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const updatePost = function (data, postId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/posts/' + postId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPosts = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/posts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePost = function (postId) {
  return $.ajax({
    url: config.apiUrl + '/posts/' + postId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newPost: newPost,
  getPost: getPost,
  updatePost: updatePost,
  getPosts: getPosts,
  deletePost: deletePost
}
