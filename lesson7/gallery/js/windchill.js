 /* Input: get temperature and wind speed from the user
       * Processing: calculate the wind chill factor
       * Output:  display wind chill factor to the user
       */
      function doInputOutput() {
        let temperature = 50;
        let windSpeed = 3;
        
        let windChillVariable = windChill(temperature, windSpeed);
        document.getElementById("output").innerHTML = windChillVariable.toFixed(
          0
        );
      }
      // Return the wind chill factor in Fahrenheit
      //  formula for the wind chill factor

      function windChill(temperature, windSpeed) {
        let windChillVariable =
          35.74 +
          0.6215 * temperature -
          35.75 * windSpeed ** 0.16 +
          0.4275 * temperature * windSpeed ** 0.16;
        return windChillVariable;
      }

      doInputOutput();