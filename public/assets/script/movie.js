
let movieData;


//get movie id number into string literal
fetch(`/api/movie/${window.location.href.split('movie/')[1]}/review`)
.then((response) => response.json())
.then((data) => {
  movieData = data
  console.log(data)
});
console.log(window.location.href.split('movie/')[1])

fetch(`/api/user/${movieData.review[0].user_id}`)
.then((response) => response.json())
.then((data) => {
  console.log(data)
});