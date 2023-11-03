import axios from "axios";

export const otherCitiesCall = (city)=>{
   return axios
     .get("https://api.weatherapi.com/v1/forecast.json?", {
       params: {
         key: "88d6da17c65944d4bc640552232910",
         q: 'London',
       },
     })
     .then((res) => res.data);
}