const stringifyOptions = optionsArray => {
    Message = ''
    optionsArray.forEach( (option, index) => {
        Message += `${index + 1}. ${option} \n`
    });
    return Message
}


const getReply = (reply, options) => {
    replyNum = parseInt(reply)
    index = replyNum - 1
    return options[index]
}

const findLeaf = (obj, array) => {
    let result = {
        ...obj
    }
    array.forEach( element => {
        result = result[element]
    })
    return result
}

const insertInTemplate = (string, array) => {
    re = /\$\{[a-zA-Z]+\}/
    array.forEach(element => {
        string = string.replace(re, element)
    })
    return string
}

exports.findLeaf = findLeaf
exports.insertInTemplate = insertInTemplate
exports.getReply = getReply
exports.stringifyOptions = stringifyOptions