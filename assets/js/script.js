$(document).ready(function () {

  
    var showData = $('#show-data');
    var details = $('#details');

    $.getJSON('membres.json', function (data) {
      console.log(data);

      var items = data.membres.map(function (item) {
        return item.nom + ': ' + item.carac + '.tel: ' + item.contact;
      });

      var listmembre = data.membres.map(function (item) {
        return "<li class='membre' id=" + item.id + ">" + item.nom + "</li>";
      });


      showData.empty();

      if (listmembre.length) {

        var content = listmembre.join('');
        var list = $('<ul />').html(content);
        showData.append(list);
      }

      var coll = document.getElementsByClassName("membre");
      //console.log(coll);
      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function(yeah) {
          mo = yeah.target.id;
          console.log(mo);

          details.html(items[mo]);
        });
      }




    });

    showData.text('Loading the JSON file.');



    

});
