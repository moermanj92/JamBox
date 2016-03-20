$(function(){
          $.get('http://localhost:8080/JamBoxAPI/Band/slmqkfjmq', function(data) {
              console.log(data); //log json object
              console.log(data.band.name);
              $(".band-name")
              		.append(data.band.name); //get name into body
              $(".band-city")
              		.append(data.band.city); //get city into body
              $(".band-zip")
              		.append(data.band.zip); //get zip into body
              $(".band-state")
              		.append(data.band.state); //get state into body
              $(".band-country")
              		.append(data.band.country); //get country into body
          });
      });