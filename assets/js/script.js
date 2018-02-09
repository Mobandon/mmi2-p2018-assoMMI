$(document).ready(function () {

  
    var listeMembre = $('#listeMembre');
    var details = $('#details');

    $.getJSON('membres.json', function (data) {
      console.log(data);

      var items = data.membres.map(function (item) {
        var outp = "<img src='img/" + item.photo + "' alt='' height='200' width='200'/><div><h3>"+ item.nom +"</h3><p>"+ item.carac + "</p>";
        if (item.tel != "") {outp += "<i class='fa fa-phone'></i><p>" + item.tel + "</p>"}
        if (item.email != "") {outp += "<i class='fa fa-envelope'></i><a href='mailto:" + item.email +"'><p>" + item.email + "</p></a>"}
        if (item.poste != "") {outp += "<i class='fa fa-user'></i><p>" + item.poste + "</p>"}
        return outp + "</div>";
      });

      var listmembre = data.membres.map(function (item) {
        return "<figure>" + "<img src='img/" + item.photo + "' alt='' height='100' width='100' class='membre' id='"+ item.id +"'/><figcaption>" +  item.nom + "</figcaption></figure>";
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
        coll[i].addEventListener("mouseover", function(yeah) {
          mo = yeah.target.id;
          console.log(mo);

          details.html(items[mo]);
        });
      }




    });

    listeMembre.text('Loading the JSON file.');



    

});
