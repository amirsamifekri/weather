let myArrayResponse ;
let findYourLocation = document.querySelector(".findYourLocation");
// let cityName = document.querySelector(".cityName");
let todayDegree = document.querySelector(".todayDegree");
let todayDate = document.querySelector(".todayDate");
let weatherStatus1 = document.querySelector(".weatherStatus1");
let weatherDegree1Img = document.querySelector(".weatherDegree1Img");

let weatherDegree2Img = document.querySelector(".weatherDegree2Img");
let tomorrowDegreeBig = document.querySelector(".tomorrowDegreeBig");
let tomorrowDegreeSmall = document.querySelector(".tomorrowDegreeSmall");
let weatherStatus2 = document.querySelector(".weatherStatus2");

let weatherDegree3Img = document.querySelector(".weatherDegree3Img");
let afterTomorrowDegreeBig = document.querySelector(".afterTomorrowDegreeBig");
let afterTomorrowDegreeSmall = document.querySelector(".afterTomorrowDegreeSmall");
let weatherStatus3 = document.querySelector(".weatherStatus3");


let nameOfDayTomorrow = document.querySelector(".nameOfDayTomorrow");
let nameOfDayAfterTomorrow = document.querySelector(".nameOfDayAfterTomorrow");




let cityName = document.querySelector(".cityName");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




async  function love (amir="Cairo" ){
let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=47a55598a9e249b8b23191331221610&q=${amir}&days=3&aqi=no&alerts=no`);
myArrayResponse = await res.json();
displayToday();
tomorrow ();
afterTomorrow ();
}

love();

findYourLocation.addEventListener("keyup" , function(){
    love(this.value) 
})


function displayToday (){ 
    const d = new Date(myArrayResponse.forecast.forecastday[0].date);
    // let day = days[d.getDay()];

    todayDate.innerHTML = days[d.getDay()] ;
    cityName.innerHTML = myArrayResponse.location.name;
    todayDegree.innerHTML = myArrayResponse.forecast.forecastday[0].hour[0].temp_c;
    weatherStatus1.innerHTML = myArrayResponse.forecast.forecastday[0].day.condition.text;
    weatherDegree1Img.setAttribute("src" , `https:${myArrayResponse.forecast.forecastday[0].day.condition.icon}`)
}


function tomorrow (){
    const d = new Date(myArrayResponse.forecast.forecastday[1].date);
    

    nameOfDayTomorrow.innerHTML = days[d.getDay()] ;

weatherDegree2Img.setAttribute("src" , `https:${myArrayResponse.forecast.forecastday[1].day.condition.icon}`)
tomorrowDegreeBig.innerHTML= myArrayResponse.forecast.forecastday[1].hour[0].temp_c;
tomorrowDegreeSmall.innerHTML= myArrayResponse.forecast.forecastday[1].hour[0].temp_f;
weatherStatus2.innerHTML = myArrayResponse.forecast.forecastday[1].hour[0].condition.text;
}


function afterTomorrow (){

    const d = new Date(myArrayResponse.forecast.forecastday[2].date);
    

    nameOfDayAfterTomorrow.innerHTML = days[d.getDay()] ;


    weatherDegree3Img.setAttribute("src" , `https:${myArrayResponse.forecast.forecastday[2].day.condition.icon}`)
    afterTomorrowDegreeBig.innerHTML= myArrayResponse.forecast.forecastday[2].hour[0].temp_c;
    afterTomorrowDegreeSmall.innerHTML= myArrayResponse.forecast.forecastday[2].hour[0].temp_f;
    weatherStatus3.innerHTML = myArrayResponse.forecast.forecastday[2].hour[0].condition.text;
}







