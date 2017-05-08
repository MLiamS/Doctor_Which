var Doctor = require('../js/doctor.js').doctorModule;


$(document).ready(function() {
  var doctors = new Doctor();
  $('#queryForm').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    doctors.getDoctors(medicalIssue);
  });
});
