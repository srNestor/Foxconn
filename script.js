function generatePDF(){
    const element = document.getElementById("invoice");
    html2pdf()
    .from(element)
    .save();
}

let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;

document.querySelector("#today2").valueAsDate = new Date();


(function() {
    $('form > input').keyup(function() {
 
       var empty = false;
       $('form > input').each(function() {
          if ($(this).val() == '') {
             empty = true;
          }
       });
 
       if (empty) {
          $('#register').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
       } else {
          $('#register').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
       }
    });
 })()