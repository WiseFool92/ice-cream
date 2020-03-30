$(document).ready(function() {
  $("form#flavor").submit(function(event){
    event.preventDefault();
    var flavors = ['Pistachio', 'Peppermint', 'Chocolate Peanut Butter', 'Cookies & Cream'];
    flavors.forEach(function(flavor) {
      $('.output').append("<li>" + flavor + "</li>")

      //$(flavors).show();
      //return(flavors);
      //alert('My favorite flavor of icecream is' + " " + flavors);
      //var flavors = $("flavors#" + flavor).val();
      //$("." + flavor).text(flavors);
      //console.log(flavors)
      //$("#Pistachio", "Peppermint").text(flavors[0, 1, 2, 3])
      //console.log(flavors)
      //$("#input").text(flavors[0, 1, 2, 3]);
   
    });
  });
});