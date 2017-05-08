var apiKey = require('./../.env').apiKey;

Doctor = function(){};

showDoctors = function(result) {
  for (var i = 0; i < (result).length; i++) {
    console.log("Trying to display doctors");
   $('#doctors').append('<li>' + result[i].data + '</li>');
  }
};

Doctor.prototype.getDoctors = function(medicalIssue, showDoctors) {
  console.log("Trying to find some doctors");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) { console.log(result.data[0].profile.first_name + ' ' + result.data[0].profile.last_name);
   })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
// ^this stuff is from the assignment website^
