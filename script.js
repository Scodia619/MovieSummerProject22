//Trying out adding more divs to the parent
//getting the parent element
const wrapper = document.createElement("div");
wrapper.className = "container"
//array for testing
const arr = ["80", "36", "878"];

//arr.map but adding the call for the database and a nested loop to display certain genres
arr.map(x => {
  //Show to Lee
  axios.get("https://api.themoviedb.org/3/discover/movie?api_key=1c191405789eb90f303f6f758c15e1eb&language=en-US&with_genres="+parseInt(x))
  .then(response => {
  console.log(response.data);
  let info = response.data;
  wrapper.innerHTML=""
  for(let i=0; i < 5; i++){
    //need to get image display working and then finish seperate them based on genre
    //need to setup database and get rating and then colour code the rating if i have watched it
    wrapper.innerHTML += `<div class="item" id="` + x +`">
    <img src="https://image.tmdb.org/t/p/original` + info.results[i].poster_path +`" alt="`+ info.results[i].title +`">
    <div class="film-info ">
        <p class="film-title">` + info.results[i].title +`</p>
        <p class="film-rating">9/10</p>
    </div>
    <div class="film-description-holder">
        <p class="film-description">` + info.results[i].overview +`</p>
    </div>
</div>`
console.log(wrapper.innerHTML)
  }
  document.body.append(wrapper)
 }).catch(error => console.error(error));
})

//changing font colour based on rating
//setting the variable
const rating = 6;

//Conditional statements to decide what colour the font will be
// if(rating<4){
//   document.getElementById("film-rating").style.color = "red";
// }else if(rating>7){
//   console.log("test")
//   document.getElementById("film-rating").style.color = "#39FF14";
// }else{
//   document.getElementsByClassName("film-rating")[1].style.color = "yellow";
// }

function add(){
  console.log("add")
}