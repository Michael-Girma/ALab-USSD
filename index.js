const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3553
const router = express.Router();
const app = express();
const utils = require('./utils.js')
const answers = require('./answers.js')
const {
    first_page,
    second_page,
    third_page
} = require('./pages.js')
const axios = require('./axios')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/',async (req, res) => {
        console.log(req.body)

        const { sessionId, serviceCode, phoneNumber, text } = req.body;

        let response = '';
        
        if (text == '') {
            response = `CON ${first_page.question} \n${utils.stringifyOptions(first_page.options)}`
        }
        else if (first_page.replies.test(text)){
            console.log(first_page.replies)
            response = `CON ${second_page.question} \n${utils.stringifyOptions(second_page.options)}`
        }
        else if (second_page.replies.test(text)){
            response = `CON ${third_page.question} \n${utils.stringifyOptions(third_page.options)}`
        }
        else if (third_page.replies.test(text)) {
            replies = text.split('*')
            
            let coin = utils.getReply(replies[0], first_page.options)
            let reqInfo = utils.getReply(replies[1], second_page.options)
            let currency = utils.getReply(replies[2], third_page.options)
            response = `END ${answers.prefix[reqInfo]} ${coin} ${answers.suffix[reqInfo]} ${await axios.getCoinInfo(coin, reqInfo, currency)}`
        }
        else{
            response = `END ${answers.error}`
        }

        res.set('Content-Type: text/plain');
        res.send(response);
});

app.use("/", router);

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
  })
