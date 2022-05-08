// Setup empty JS object to act as endpoint for all routes

// Require Express to run server and routes
const cors=require("cors");
const express=require("express");
const bodyParser=require("body-parser");
const { request } = require("http");
const { response } = require("express");

//listen port
const port= 4500;

// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));





// Setup Server
app.listen(port, ()=>{
    console.log(`running on: http://localhost:${port}`);
    console.log("server running");
});

//get all data by the http://localhost:4500/getAll




const recentData = []


app.get("/getAll",(request,response)=>{

   const sortedActivities = recentData.sort((a, b) => new Date(b.date)  - new Date(a.date))/////ميثود الsorting 


    response.send(recentData).status(200).end();
})

//post all data by the http://localhost:4500/postData
app.post("/recentEntry",(request, response)=>{
     console.log("dd",request.body);
    //post data now
   const exZipCode = recentData.find((item) => 
                                        item.zipCode == request.body.zipCode )
   console.log(exZipCode);
    if(exZipCode)  {  
        
                return

    }
    else  { 
        

        
        recentData.push(request.body)}

        const sortedActivities = recentData.sort((a, b) => new Date(b.date)  - new Date(a.date))/////ميثود الsorting 
    response.send(sortedActivities).status(200).end();
})
