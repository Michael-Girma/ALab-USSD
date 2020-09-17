const prefix = {
    'Check Current Price' : "The current price of ",
    "Check All time high" : 'The All time high selling price of ',
    "Check Price % Change in 24 hours" : 'The price change in percentage over 24 Hours in terms of the selected currncy for ',
    "Check Price % Change in 7 days" : 'The price change in percentage over 7 days in terms of the selected currncy for '
}

const suffix = {
    'Check Current Price': 'is: ',
    "Check All time high" : 'was: ',
    "Check Price % Change in 24 hours" : 'is: ',
    "Check Price % Change in 7 days" : 'is: '
}

const error = "Please insert one of the choice numbers only"

answers = {
    prefix,
    suffix,
    error
}

module.exports = answers