// //variables

// const apiKey="c3467e5640e1f65c4272bedf0f6d518d";
// const url="http://localhost:4500";
// const wUrl = "https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid=${apiKey}"

// const zipCodeElement= document.getElementById("zip");
// const feelingCodeElement= document.getElementById("feelings");
// const dateElement= document.getElementById("date");
// const tempElement= document.getElementById("temp");
// const contentElement= document.getElementById("content");


// const catchError=(error)=>{
//     console.error("some error has been",error)
// }

// // Personal API Key for OpenWeatherMap API

// // Event listener to add function to existing HTML DOM element
// document.getElementById("generate").addEventListener("click",ongenerate)

// /* Function called by event listener */

// /* Function to GET Web API Data*/

// /* Function to POST data */
// function ongenerate(){
    
//    let infoo={
//         zipCode:zipCodeElement.value,
//         content:contentElement.value,
//         date : new Date()
//     };
//     //post data to api to get zip code infromation
//     getZipCodeInfromation(infoo.zipCode).then(res=>{

//         console.log("done");
//         if (res.cod != 200 )
//         {
//             return alert(res.message);
//         }
//         else 
//         {
//             console.log("done")
//         }
        
//         //return and show alert if city is not found
       
      
//         //post data to server for saving and displaying in holder section
//         ///infoo.temp=zip_infoo.list[0].main.temp;
//         //postdataToServer(infoo);
//     }).catch(catchError);

// };

// //get zip code infromation from api
// async function getZipCodeInfromation(zipCode){
    
//  return await  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`).json();

// }

// /* Function to GET Project Data */
