var queries={
  carDelete : function(id){

    $.ajax({
    url: `https://obscure-wildwood-54124.herokuapp.com/cars/${id}`,
    type: 'DELETE',
    success: function(result) {
        $('p').text(result)
        $('p').fadeIn('slow').delay(1000).fadeOut('slow');

    }
  })

} ,
  carAdd : function(items){
    carInputs={
    color : items.color ,
      condition : items.condition ,
        make_year : items.make_year ,
          model : items.model ,
            options : items.options ,
              price : items.price

   }
$.post("https://obscure-wildwood-54124.herokuapp.com/cars/" , carInputs)
.done(function(data){
  $('p').text(data)
  $('p').fadeIn('slow').delay(1000).fadeOut('slow');
  getCarTable()
})

  } ,
  carUpdate : function(body,id){
    $.ajax({
        type: 'PUT',
        url: `https://obscure-wildwood-54124.herokuapp.com/cars/${id}`,
        data: body,


        success: function (result) {
          $('p').text(result)
          $('p').fadeIn('slow').delay(1000).fadeOut('slow');

        }

    }).ajaxError(function(){
    alert("An error occurred!");
});
  }

}
