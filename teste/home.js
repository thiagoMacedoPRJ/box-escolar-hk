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
  all.style.display = 'block';

  

  console.log("Chegueiiiii!!!!");


  
  var link = 'loginqr/'; // digo a rato aonde minha info vai

  var finalURL = link + qrCodeMessage; // passo a info mais o que o qr identificou

  console.log("final: "); // informo o que vai ser gerado
  console.log(finalURL); // mostro o que gerou


  $.ajax({

   url: finalURL, // passo o link
   method: 'get', // passo o metodo de envio ou recebimento

  success: function (data) {
    console.log("data: ");
    console.log(data); // Recebo de volta do server
    if (data == '/gerenciador')
    {window.location.href='/gerenciador'}
    else
    {window.location.href='/erroQR'}
  },

  error: function (data) {
      console.log(data);
      window.location.href='/erroQR'
    }


  });



}







function onScanError(errorMessage) {}


var html5QrcodeScanner = new Html5QrcodeScanner(
  
  "reader", {
      fps: 10,
      qrbox: 250
  }
  
);


html5QrcodeScanner.render(onScanSuccess, onScanError);