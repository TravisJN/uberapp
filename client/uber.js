$('button').on('click', function(e) {
  $.ajax({
    url: 'http://localhost:3333/uberData'
  }).done(function(data) {
    console.log(data);
    var body = $('body');

    for(var key in data) {
      if(data[key].constructor === Array) {
        _.each(data[key], function(element) {
          if(element.constructor === Object) {
            for(var key1 in element) {
              body.append(key1 + ': ' + element[key1]);
              body.append()
            }
          }
        })
      }
    }
  });
});
