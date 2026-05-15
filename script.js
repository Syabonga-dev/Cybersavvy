function sendMail(){

  let dropdown = document.getElementById("dropdown");
  let selectedOption = dropdown.options[dropdown.selectedIndex];
  let optgroupLabel = selectedOption.parentNode.label;
  let packageText = optgroupLabel + " — " + selectedOption.text;


  let parms = {
    name : document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message: document.getElementById("message").value,
    package: packageText
  }

  emailjs.send("service_nxkhwxe" , "template_hi15oz3", parms).then(alert("Email has been sent!"))
}