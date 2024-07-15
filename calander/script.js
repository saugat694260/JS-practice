const dropDownOptions=document.querySelector('.drop-down-options')
const weatherForm=document.querySelector('.weather-form');
const cityInput=document.querySelector('.city-input');
const card=document.querySelector('.weather-card');
const apiKey='76129828a9a1004e12782f4ca92a1790';





//getting cities name

fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`).then(response=>


response.json()

).then(data=>{

updatingDropDownOptionsHtml(data);

}); 


dropDownOptions.addEventListener('click',(event)=>{

    event.preventDefault();
    cityInput.value=dropDownOptions.value;

    console.log(dropDownOptions.value);
})


 

weatherForm.addEventListener("submit",/* must be used to use await */ (event)=>{
    
    
    event.preventDefault();//avoids refreshing the page
    const city=cityInput.value;

    if(city){
        dropDownOptions.value=city;

try{

  getWeatherData();
}
catch(error){
    displayError(error);
}

    }
    else{
        displayError("please enter a city");
    }

});

function updatingDropDownOptionsHtml(info){
    const{data}=info;
    let html;

    data.forEach((data)=>{
       const {city}=data;
       
       let results=compare(city.toLowerCase(),'');

      if(results){
        html+=`<option value="${city}" selected="kathmandu">${city}</option>`
      }
       
       else{
        html+=`<option value="${city}" selected="kathmandu">${city}</option>`
       }

    });
    dropDownOptions.innerHTML=html;
    cityInput.value=dropDownOptions.value;

    
};
function compare(wordOne, wordTwo) {
    return wordOne[0] === wordTwo[0];
}



function getWeatherData(){
    const city=cityInput.value;

   const response= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response=>
    
    
    response.json()
    
    ).then(data=>{
      
      const info= data;
      //if the city is not found
      if(info.cod==404){
      
        displayError('city not found');
        
        throw new Error('city not found');
     
        
     }
     else{
        displayWeatherData(info);
     }
      

      
    
     
     }); 
    
     


};
function displayWeatherData(data){

const{name:city,
    main:{temp,humidity},
    weather:[{description,id}]}=data;//destructuring
    card.textContent="";
    card.style.display="flex";

    const displayCity=document.createElement("h1");
    const displayTemp=document.createElement("p");
    const displayHumidity=document.createElement("p");
    const displayDescription=document.createElement("p");
    const displayweatherEmoji=document.createElement("p");

    displayCity.textContent=city;
    card.appendChild(displayCity);
  
    displayTemp.textContent=`${(temp-273.15).toFixed(1)}°c`;
    card.appendChild(displayTemp);
    
    displayHumidity.textContent=humidity;
    card.appendChild(displayHumidity);
   
    displayDescription.textContent=description;
    card.appendChild(displayDescription);
   
    displayweatherEmoji.textContent=getWeatherEmojis(id);
    card.appendChild(displayweatherEmoji);
   
   

};
 function getWeatherEmojis(weatherId){

    switch(true){
        case (weatherId>=200 && weatherId<300):
            return "⛈️";

            case (weatherId>=300 && weatherId<400):
            return "🌦️";

            case (weatherId>=500 && weatherId<600):
            return "🌧️";

            case (weatherId>=600 && weatherId<700):
            return "❄️";

            case (weatherId>=700 && weatherId<800):
            return "🌫️";

            case (weatherId==800):
            return "☀️";
            
            case (weatherId>=801 && weatherId<810):
            return "☁️";
            default:
                return "❓"
        
    }
 };
 function displayError(message){
const errorDisplay=document.createElement("p");
errorDisplay.textContent=message;
console.log(message);
errorDisplay.classList.add("error-display");

card.textContent="";
card.style.display="flex";
card.appendChild(errorDisplay);
 };


   
     
    