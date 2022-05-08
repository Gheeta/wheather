
const apiKey="9b0e6e69d0b42196c6e6e089ed3a22e7";
const url="http://localhost:4500";

const zipCodeElement= document.getElementById("zip");
const feelingCodeElement= document.getElementById("feelings");
const dateElement= document.getElementById("date");
const tempElement= document.getElementById("temp");
const contentElement= document.getElementById("content");
const  entryHolder = document.getElementById('entryHolder') 


document.getElementById("generate").addEventListener("click",ongenerate)

async function ongenerate(){
    let infoo={
         zipCode:zipCodeElement.value,
         content:feelingCodeElement.value,
         date : new Date()
     };
     //post data to api to get zip code infromation
getZipCodeInfromation(infoo)


 };


const catchError=(error)=>{
    console.error("some error has been",error)
}



//get zip code infromation from api
async function getZipCodeInfromation(obj){

await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${obj.zipCode}&appid=${apiKey}`).then(res => res.json()).then(res =>  {
    console.log(res);

    if(res.cod != 200){
         console.log("error")
         alert(res.message);
} else{
    obj.temp = Math.round(res.list[0].main.temp)+ ' degrees' 
    obj.cityName = res.city.name

    console.log(obj);

    PostData('http://localhost:4500/recentEntry' , obj);
}


    

 } ).catch(catchError);

  
   }
   
   /* Function to GET Project Data */
//    .then(res => res.json()).then(res => console.log(res))



//<div>Name: ${data.cityName}</div>


const PostData= async (url ='' , data ={})=>{
    console.log(data);

    const response = await fetch(url, {
        method:'post' ,                  //post, get, delete, push
        Credentials:'same-origin',       // include, the same origins, omit
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),  //body data type must match "Content_Type" header

    });

    try{
        console.log("s",response);
        const newData= await response.json();
        console.log("newData", newData);


        entryHolder.innerHTML = newData.map(data => 
            `<div class="result_data">
                 
                 <div>temp: ${data.temp}</div>
                 <div>content: ${data.content}</div>
                 <div>date: ${data.date}</div>

                              
            </div>`
            ).join('')
       
        return newData; 
    }catch(error){
        console.log("error",error);
    }
}



const GetData= async (url ='' )=>{

    const response = await fetch(url, {
        method:'get' ,                  //post, get, delete, push
        Credentials:'same-origin',       // include, the same origins, omit
        headers:{
            'Content-Type':'application/json',
        },

    });

    try{
        console.log("s",response);
        const newData= await response.json();
        console.log("newData", newData);


        if(newData.length == 0){
            entryHolder.innerHTML = 
                `<div>
                    no recent data
    
                                  
                </div>`
           
            return
        }


        entryHolder.innerHTML = newData.map(data => 
            `<div class="result_data">
            
                 <div>temp: ${data.temp}</div>
                 <div>content: ${data.content}</div>
                 <div>date: ${data.date}</div>           
            </div>`
            ).join('')


        return newData; 
    }catch(error){
        console.log("error",error);
    }
}

GetData('http://localhost:4500/getAll')





