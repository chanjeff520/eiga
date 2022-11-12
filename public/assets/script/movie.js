//get movie id number into string literal
fetch(`/api/movie/${window.location.href.split('movie/')[1]}/reviews`)
.then((response) => response.json())
.then((data) => console.log(data));
console.log(window.location.href.split('movie/')[1])

