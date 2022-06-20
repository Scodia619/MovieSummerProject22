//Trying out adding more divs to the parent
//getting the parent element
const container = document.getElementById("1");
//array for testing
const arr = ["80", "36", "878"];

//arr.map but adding the call for the database and a nested loop to display certain genres
arr.map(x => {
  //Show to Lee
  axios.get("https://api.themoviedb.org/3/discover/movie?api_key=1c191405789eb90f303f6f758c15e1eb&language=en-US&with_genres="+parseInt(x))
  .then(response => {
  console.log(response.data);
  let info = response.data;
  for(let i=0; i < 5; i++){
    console.log("https://image.tmdb.org/t/p/w500" + info.results[i].poster_path)
    container.innerHTML += `<div class="item">
    <img src="https://image.tmdb.org/t/p/original"` + info.results[i].poster_path +` alt="`+ info.results[i].title +`">
    <div class="film-info ">
        <p class="film-title">` + info.results[i].title +`</p>
        <p class="film-rating">9/10</p>
    </div>
    <div class="film-description-holder">
        <p class="film-description" id="four">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, esse possimus illum vero ut perferendis architecto reiciendis voluptates sint, nisi, eos ullam? Cupiditate iure quas, quibusdam voluptas suscipit beatae saepe.</p>
    </div>
</div>`
  }
  }).catch(error => console.error(error));
})

//changing font colour based on rating
//setting the variable
const rating = 6;

//Conditional statements to decide what colour the font will be
if(rating<4){
  document.getElementById("film-rating").style.color = "red";
}else if(rating>7){
  console.log("test")
  document.getElementById("film-rating").style.color = "#39FF14";
}else{
  document.getElementsByClassName("film-rating")[0].style.color = "yellow";
}