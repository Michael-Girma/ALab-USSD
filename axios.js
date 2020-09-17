const axios = require('axios')
const {} = require('./coins')
const {CURR_INFO} = require('./currency')
const {INFO_TO_API} = require('./services')
const {COIN_ID} = require('./coins')
const utils = require('./utils')

const BASEURL = "https://api.coingecko.com/api/v3/"


const getCoinInfo = async (coin, info, currency) => {
    service = INFO_TO_API[info]
    currency_info = CURR_INFO[currency]
    endpoint_template = service.endpoint
    coin_id = COIN_ID[coin]
    endpoint = utils.insertInTemplate(endpoint_template, [coin_id])
    console.log(BASEURL , '-', endpoint)
    response = await axios.get(BASEURL + endpoint)
    data = response.data
    json_path = service["json_path"]
    path_heirarchy = json_path.split('__')
    path_data = utils.findLeaf(data, path_heirarchy)
    value = path_data[currency_info.abbrv]
    message = appendExt(value, service.suffix_type, currency_info.symbol)
    return message
}

const appendExt = (value, suffix_type, symbol) => {
    switch(suffix_type){
        case 'Currency': 
            return `${symbol}${value}`
        case 'Percentage':
            return `${value}%`
        default:
            return
    }
}


module.exports = {
    getCoinInfo
}
