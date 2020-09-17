const {SUPPORTED_COINS} = require('./coins')
const {SUPPORTED_INFO} = require('./services')
const {SUPPORTED_CURR} = require('./currency')


first_page_options = SUPPORTED_COINS
second_page_options = SUPPORTED_INFO
third_page_options = SUPPORTED_CURR

const first_page = {
    question : 'Welcome to our cryptowatch service. Select the cryptocoin you wish to know about.',
    options: first_page_options,
    replies: new RegExp(`^[1-${first_page_options.length}]$`) //possible replies to the first page
}

const second_page = {
    question: 'Select Desired Attribute',
    options: second_page_options,
    replies: new RegExp(`^[1-${first_page_options.length}]\\*[1-${second_page_options.length}]$`) //possible replies to the second page
}

const third_page = {
    question: 'Select the currency to retrieve the information in',
    options: third_page_options,
    replies: new RegExp(`^[1-${first_page_options.length}]\\*[1-${second_page_options.length}]\\*[1-${third_page_options.length}]$`) //possible replies to the second page
}

const pages = {
    first_page,
    second_page,
    third_page
}

module.exports = pages