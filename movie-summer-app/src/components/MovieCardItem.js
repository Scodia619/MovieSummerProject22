import './MovieCardItem.css';

function MovieCardItem(){
    
    return(

        <div className="container" id="1">
            <div className="item">
                <img id="one" src="https://image.tmdb.org/t/p/original/kRpKJstAW7DsoPAEBW2Kk1uD9Q6.jpg" alt="Dr Strange Poster"></img>
                <div className="film-info ">
                    <p className="film-title" id="two">Dr Strange</p>
                    <p className="film-rating" id="three">9/10</p>
                </div>
                <div className="film-description-holder">
                    <p className="film-description" id="four">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, esse possimus illum vero ut perferendis architecto reiciendis voluptates sint, nisi, eos ullam? Cupiditate iure quas, quibusdam voluptas suscipit beatae saepe.</p>
                </div>
            </div>
        </div>

    )
    
}

function add(){
    console.log("hello");
}

export default MovieCardItem;