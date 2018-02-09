$(document).ready(function () {

  
    var showData = $('#show-data');

    $.getJSON('membres.json', function (data) {
      console.log(data);

      var items = data.membres.map(function (item) {
        return item.nom + ': ' + item.carac + '.tel: ' + item.contact;
      });

      showData.empty();

      if (items.length) {

        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');

});
