//-----------------------------------------------------API del clima------------------------------------------------
class Fetch {
    async getCurrent(input) {

      //My key la hice en la web
      const myKey = "6a58badf145f2a7ac6c7616d8944b4ca";
  
      //URL donde tomo los datos (le agregue &units=metric, porque estaba en °F).
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }