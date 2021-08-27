$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {
    event.preventDefault();
    const animal = $("input#animal").val();
    const color = $("input#color").val();
    const movie = $("input#movie").val();
    const superhero = $("input#superhero").val();
    
    let favoriteThings = [animal, color, movie, superhero];
    console.log(favoriteThings);
    console.log(favoriteThings[0], favoriteThings[1], favoriteThings[2]);
    let newFavoriteThings = [];
    newFavoriteThings.push(favoriteThings[0], favoriteThings[1], favoriteThings[2]);
    console.log("newFavoriteThings = " + newFavoriteThings);


    $(".animaloutput").text(favoriteThings[0]);
    $(".coloroutput").text(favoriteThings[1]);
    $(".movieoutput").text(favoriteThings[2]);

    $("#result").show();
  });
});