function info(age,movie,showtime) {
  this.age = age;
  this.movie = movie;
  this.showtime = showtime;
}

$(function() {
  $("form#movie-selector").submit(function(event) {
    event.preventDefault();

    var age = $("#age-group :selected").text();
    var movie = parseInt($("#movie :selected").val());
    var showtime = $("#showtime :selected").text();

    if (age === "Child") {
      movie = (movie * 0.5);
    } else if (age === "Student") {
      movie = (movie * 0.9);
    } else if (age === "Senior") {
      movie = (movie * 0.7);
    }
    var ticket = new info (age,movie,showtime);
    console.log(ticket);
  });
});
