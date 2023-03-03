function getWeatherData(location){
    const weatherData=[
        {
            location: 'Kolkata',
            temp: '22',
            humdity: '50%',
            weatherType: 'Sunny'
        },
        {
            location: 'Chennai',
            temp: '20',
            humdity: '20%',
            weatherType: 'Cloudy'
        },
        {
            location: 'Mumbai',
            temp: '25',
            humdity: '70%',
            weatherType: 'Gloomy'
        },
        {
            location: 'Canada',
            temp: '12',
            humdity: '10%',
            weatherType: 'Sunny'
        },
        {
            location: 'Amsterdam',
            temp: '5',
            humdity: '17%',
            weatherType: 'Haze'
        }
    ]
    
    const result = weatherData.filter(item => item.location == search)
    const output= result.length==0? "Not Present":"Present";
    console.log(result)
    console.log(output)
}
const readline = require('readline-sync');
let search = readline.question("Hello user, what location do you want to search?");
getWeatherData(search)