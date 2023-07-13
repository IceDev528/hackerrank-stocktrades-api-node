# Stock Trades API Easy

## Data:
Example of a trade data JSON object:
```
{
    "id": 1,
    "type": "buy",
    "user_id": 23,
    "symbol": "ABX",
    "shares": 30,
    "price": 134,
    "timestamp": 1531522701000
}
```

## Project Specifications
You are provided with the implementation of the Trade model. The REST service must expose the `/trades` endpoint, which allows for managing the collection of trade records in the following way:

**POST** request to `/trades`:

- creates a new trade
- expects a JSON trade object without an id property as a body payload. You can assume that the given object is always valid.
- adds the given trade object to the collection of trades and assigns a unique integer id to it. The first created trade must have id 1, the second one 2, and so on.
- the response code is 201, and the response body is the created trade object

**GET** request to `/trades`:

- returns a collection of all trades
- the response code is 200, and the response body is an array of all trade objects ordered by their ids in increasing order

**GET** request to `/trades/<id>`:

- returns a trade with the given id
- if the matching trade exists, the response code is 200 and the response body is the matching trade object
- if there is no trade with the given id in the collection, the response code is 404 with the body having the text `ID not found`

**DELETE**, **PUT**, **PATCH** request to `/trades/<id>`:

- the response code is 405 because the API does not allow deleting or modifying trades for any id value

## Environment 
- Node Version: 14(LTS)
- Default Port: 8000

**Read Only Files**
- `test/*`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

