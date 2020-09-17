const SUPPORTED_INFO = [
    'Check Current Price',
    "Check All time high",
    "Check Price % Change in 24 hours",
    "Check Price % Change in 7 days"
]

const INFO_TO_API = {
    'Check Current Price' : {
        json_path: "market_data__current_price",
        endpoint: 'coins/${id}',
        suffix_type: 'Currency'
    },
    "Check All time high" : {
        json_path: "market_data__ath",
        endpoint: 'coins/${id}',
        suffix_type: 'Currency'
    },
    "Check Price % Change in 24 hours" : {
        json_path: 'market_data__price_change_percentage_7d_in_currency',
        endpoint: 'coins/${id}',
        suffix_type: 'Percentage'
    },
    "Check Price % Change in 7 days" : {
        json_path: 'market_data__price_change_percentage_7d_in_currency',
        endpoint: 'coins/${id}',
        suffix_type: 'Currency'
    }
}

module.exports = {
    SUPPORTED_INFO,
    INFO_TO_API
}
