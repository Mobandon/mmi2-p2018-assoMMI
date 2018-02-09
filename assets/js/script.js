$(document).ready(function () {

  
    var listeMembre = $('#listeMembre');
    var details = $('#details');

    $.getJSON('membres.json', function (data) {
      console.log(data);

      var items = data.membres.map(function (item) {
        return "<img src=" + item.photo + " alt=''/><h3>"+ item.nom +"</h3><p>"+ item.carac + "</p> tel: " + item.contact;
      });

      var listmembre = data.membres.map(function (item) {
        return "<li class='membre' id=" + item.id + ">" + item.nom + "</li>";
      });


      listeMembre.empty();

      if (listmembre.length) {

        var content = listmembre.join('');
        var list = $('<ul />').html(content);
        listeMembre.append(list);
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

    listeMembre.text('Loading the JSON file.');



    

});
