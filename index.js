
getCarTable()

getCarById ()


function getCarById (){
  var inputTag=document.getElementById('carID')
  inputTag.addEventListener("input", function(event){
       event.preventDefault()
         carId=inputTag.value
      $.get(`https://obscure-wildwood-54124.herokuapp.com/cars/${carId}`)
      .done(function(data){
         loadGridView(data)
      })
  });
}

function getCarTable(){
   $.get("https://obscure-wildwood-54124.herokuapp.com/cars")
  .done(function (data){
   loadGridView(data)
  })
}

function loadGridView(carData){

  $("#jsGrid").jsGrid({
      width: "100%",
    inserting: true,
    editing: true,
    sorting: true,
    onItemDeleted: function(args) {
    queries.carDelete(args.item.id)

    },
    onItemUpdating: function(args) {
       queries.carUpdate(args.item,args.item.id)
    },
    onItemInserting: function(args) {
     queries.carAdd(args.item)

     },
      paging: true,
      data: carData,
      pageSize :10,
      fields: [
          { name: "id", type: "number" ,readOnly:true },
          { name: "color", type: "text" },
          { name: "condition", type: "text" },
          { name: "make_year", type: "text"},
          { name: "model", type: "text"},
          { name: "options", type: "text"},
          { name: "price", type: "text" ,title:"price in dollar" },
            { type: "control"}
      ]
  });
  $("#jsGrid").jsGrid("sort", "id");
}
