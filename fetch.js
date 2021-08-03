  
class Fetch {
    async getCurrent(input) {
      const myKey = "6a58badf145f2a7ac6c7616d8944b4ca";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }