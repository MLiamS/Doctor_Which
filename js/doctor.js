var apiKey = require('./../.env').apiKey;

Doctor = function(){};

showDoctors = function(result) { console.log((result.data).length);
  for (var i = 0; i < ((result.data).length); i++) {
    console.log("Trying to display doctors");
   $('#doctors').append('<li>' + result.data[i].profile.first_name + " " + result.data[i].profile.last_name + '</li>');
  }
};

Doctor.prototype.getDoctors = function(medicalIssue) {
  console.log("Trying to find some doctors");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) { console.log(result.data[0].profile.first_name); showDoctors(result);
   })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
// ^this stuff is from the assignment website^
