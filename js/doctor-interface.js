var Doctor = require('../js/doctor.js').doctorModule;

$(document).ready(function() {
  console.log("help");
  var doctors = new Doctor();
  $('#queryForm').submit(function(event) {
    event.preventDefault();
    console.log(medicalIssue);

    var medicalIssue = $('#medicalIssue').val();
    console.log(medicalIssue);
    doctors.getDoctors(medicalIssue);

    for (var i = 0; i < medicalIssue.length; i++) {
      console.log("trying to display doctors");
     $('#docList').append('<li>' + medicalIssue[i] + '</li>');
    }
  });
});
