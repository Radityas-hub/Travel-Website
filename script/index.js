function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_2ybm1o6";
      const templateID = "template_e6t5i2u";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          showAlert();
          })
          .catch(err => {
          showFailed();
          });
  }