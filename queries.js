var queries={
  carDelete : function(id){

    $.ajax({
    url: `https://obscure-wildwood-54124.herokuapp.com/cars/${id}`,
    type: 'DELETE',
    success: function(result) {
        $('p').text(result)
        $('p').fadeIn('slow').delay(1000).fadeOut('slow');
          getCarTable()
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
$.post("https://obscure-wildwood-54124.herokuapp.com/cars" , carInputs)
.done(function(data){
  $('p').text(data)
  $('p').fadeIn('slow').delay(1000).fadeOut('slow');
  getCarTable()
})

  } ,
  carUpdate : function(body,id){
    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/cars/${id}`,
        data: body,


        success: function (result) {
          $('p').text(result)
          $('p').fadeIn('slow').delay(1000).fadeOut('slow');
         getCarTable()
        }

    })
  }

}
