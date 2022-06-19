//Trying out adding more divs to the parent
//getting the parent element
const container = document.getElementById("container");
//array for testing
const arr = ["1","1","1"];

//array.map runs through all the element of the arr array much like forEach would
arr.map(x => {
    const newDiv = document.createElement("div");
    newDiv.className = "item";
    newDiv.innerHTML += x;
    container.append(newDiv)
  });

//changing font colour based on rating
//setting the variable
const rating = 9;

//Conditional statements to decide what colour the font will be
if(rating<4){
  document.getElementById("film-rating").style.color = "red";
}else if(rating>7){
  console.log("test")
  document.getElementById("film-rating").style.color = "#39FF14";
}else{
  document.getElementById("film-rating").style.color = "yellow";
}

//testing axios
axios.get("https://api.themoviedb.org/3/movie/555?api_key=1c191405789eb90f303f6f758c15e1eb&language=en-US")
.then(response => {
  console.log(response.data);
  let info = response.data;
  console.log(info.poster_path)
})
.catch(error => console.error(error));