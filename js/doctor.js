var apiKey = require('./../.env').apiKey;

Doctor = function(){};

showDoctors = function(result) {
  for (var i = 0; i < medicalIssue.length; i++) {
    console.log("trying to display doctors");
   $('#doctors').append('<li>' + medicalIssue[i] + '</li>');
  }
};

Doctor.prototype.getDoctors = function(medicalIssue, showDoctors) {
  console.log("Trying to find some doctors");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) { showDoctors(result);
       })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
// ^this stuff is from the assignment website^
