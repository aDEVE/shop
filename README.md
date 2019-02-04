# Shop example
  An example store built using [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [Styled-components](https://www.styled-components.com/). This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
## Development
    
   We use JSON-server as API, you need to install it.
   
   ```bash
    yarn global add json-server
   ```
   
   Clone project and install dependencies 
   
   ```bash
    git clone git@github.com:aDEVE/shop.git
    cd shop
    yarn install # or npm install    
    json-server --watch db.json # start server api
   ```
   
   run in an other terminal 
   ```bash
   cd path/to/shop
   yarn start
   ```
   
## Test 

There is a scenario of test implemented with cypress. To open it run : 

```bash
    yarn cypress
```

A window will be open, you have to click on `Run all specs`, do not forget
to have api running with at the root of project : 

```bash
    json-server --watch db.json
```

   
   
   