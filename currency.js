const SUPPORTED_CURR = [
    "US Dollars" ,"Bitcoins" , "GB Pounds" ,"Euro"
]

const CURR_INFO = {
    "US Dollars" :{
        abbrv: 'usd',
        symbol: '$'
    },
    "Bitcoins" :{
        abbrv: 'btc',
        symbol: 'btc'
    },
    "GB Pounds" :{
        abbrv: 'gbp',
        symbol: '£'
    },
    "Euro" :{
        abbrv: 'eur',
        symbol: '€'
    },
}

module.exports = {
    SUPPORTED_CURR,
    CURR_INFO
}