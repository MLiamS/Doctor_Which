var apiKey = require('./../.env').apiKey;


function Doctor() {
}

// Doctor.prototype.getDoctor = function (name, location) {
//   console.log("Started the doctor search");
// $.get('https://api.betterdoctor.com/2016-03-01/doctors?' + name + 'location=' + location + '%2C100&user_location=' + location + '&sort=distance-asc&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
//     console.log(response);
//   })
//  .fail(function(error){
//     console.log("fail");
//   });
// };  SO BROKEN 


exports.doctorModule = Doctor;
