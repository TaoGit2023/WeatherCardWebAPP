const { default: axios } = require("axios")

const currentCity = (city)=>{
    return axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=88d6da17c65944d4bc640552232910&q=${city}&aqi=yes&days=4`
    ).then((res)=>{
        return res.data;
    });
}