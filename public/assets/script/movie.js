//get movie id number into string literal
fetch(`/api/movie/${document.location.search.split("movie/")[1]}`)
.then((response) => response.json())
.then((data) => console.log(data));