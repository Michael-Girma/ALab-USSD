## README

ALab-USSD is a USSD service built on top of  [Africa's talking](https://africastalking.com)'s platform for mobile solutions.

This was originally a challenge raised by a [friend](https://github.com/Redi22). Although the solution was originally made considering africa's talking platform, this app can be used with any USSD Service provider providing the same methods of communication with a backend USSD app.

The service provided by this app is access to up-to-date cryptocurrency info. The data found through this app can be found on [coingecko](https://www.coingecko.com/). There API gives out valuable info and is well documented.  Check out there API explorer [here](https://www.coingecko.com/en/api/#explore-api).

## Usage

### Starting the script

All that is needed to get the script to run is installing the dependencies and running the start script. Simply execute the line below  - assuming npm is installed.

```
npm install && npm start
```

### Tunneling Traffic

Once the script is up and running, make sure the USSD service provider is tunneling traffic to the IP and PORT the script is listening on.

## MODIFICATION

Feel free to add more crypto-coins. The whole idea was to make it simple for people to go through it, thus the modular approach. More api endpoints can be included by adding little info and making minor tweaks to the services.js. The same goes for adding coins, just add some metadata to the coins.js. The SUPPORTED something variable in either *Currency.js, Services.js, Coins.js* is the text displayed to the user and the INFO object is the corresponding representation of that object to the api. that's all you need to tweak to add more info. The replies can also be set in the answers.js. 😀