$(document).ready(function() {
  $("form#flavor").submit(function(event){
    event.preventDefault();
    var flavors = ['Pistachio', 'Peppermint', 'Chocolate Peanut Butter', 'Cookies & Cream']
    flavors.forEach(function(flavors) {
      console.log(flavors)
    });
  });
});