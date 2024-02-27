function onScanSuccess(qrCodeMessage) {

  var node = document.getElementById("container");
  node.parentNode.removeChild(node);

  var all =  document.getElementById("show_all");
  console.log(qrCodeMessage);

  qrcd = qrCodeMessage.split(',');
  qru = qrcd[0]
  qrs = qrcd[1]

  //var name = $(this).text();
  $("#user").html("SEU ÚSUARIO É:  " + qru); // faço a separação para a visualização
  $("#senha").html("SUA SENHA É:  " + qrs); //  faço a separação para a visualização

  if(qru == "515200")
  {
    window.location.href='/ganhou'
  }
  else
  {
    if(qru == "525200")
    {
      window.location.href='/ganhou'
    }

    else
    {
      
      if(qru == "535200")
      {
        window.location.href='/ganhou'
      }
      else
      {
          if(qru == "545200")
          {
            window.location.href='/ganhou'
          }
          else
          {
            if(qru == "555200")
            {
              window.location.href='/ganhou'
            }
            else
            {
              window.location.href='/perdeu'
            }

          }
      }
    }

  }
  

  console.log("Chegueiiiii!!!!");


  console.log("final: "); // informo o que vai ser gerado
  console.log(finalURL); // mostro o que gerou
}







function onScanError(errorMessage) {}


var html5QrcodeScanner = new Html5QrcodeScanner(
  
  "reader", {
      fps: 10,
      qrbox: 250
  }
  
);


html5QrcodeScanner.render(onScanSuccess, onScanError);