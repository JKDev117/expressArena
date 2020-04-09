//17.3 Web APIs with Express

const express = require("express");
const morgan = require("morgan"); //pg. 14 morgan is a logging tool

const app = express();

//This is the middleware that requests pass through on their way to the final handler
app.use(morgan('dev'));

//app.get(PATH, HANDLER)
//PATH is the path on the server
//HANDLER is a function to be executed when the route is matched
//The handler function must accept 2 parameters, the 1st one is the Request object (req)
//The second parameter is the Response object (res)
//This is the final request handler
app.get('/', (req, res) => {
    res.send('Hello Express.');
});

//pg. 12
app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
})

//pg. 12
app.get('/pizza/pepperoni', (req, res) => {
    res.send('Your pizza is on the way!');
})

//pg. 12
app.get('/pizza/pineapple', (req, res) => {
    res.send("We don't serve that here. Never call again!");
})

//pg. 18
app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
        Base URL: ${req.baseURL}
        Host: ${req.hostname}
        Path: ${req.path}
    `;
    res.send(responseText);
});

//pg. 19
app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
});

//pg. 21
app.get('/greetings', (req, res) => {
    //1. get values from the request
    const name = req.query.name;
    const race = req.query.race;
  
    //2. validate the values
    if(!name) {
      //3. name was not provided
      return res.status(400).send('Please provide a name');
    }
  
    if(!race) {
      //3. race was not provided
      return res.status(400).send('Please provide a race');
    }
  
    //4. and 5. both name and race are valid so do the processing.
    const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;
  
    //6. send the response 
    res.send(greeting);
  });

  
//pg. 9
//the server needs to listen to a specific port so that requests to that port will be correctly routed to the server
app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
});






