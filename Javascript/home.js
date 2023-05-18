class MoviesArray{
    constructor(movieName, picture, movieYear){
        this.movieName=movieName;
        this.picture=picture;
        this.movieYear=movieYear;
    }
}

var moviesArray=new Array();
var rowID;

function startup(){
    fetch("./jsonfiles/jsonmovies.json")
    .then(res => res.json())
    .then((dataJSON) => {
    loadpage(dataJSON);
    loaddata(dataJSON);
    })
}

function loaddata(dataJSON){
    for(let [index, value] of dataJSON.Movies.entries()){
   moviesArray.push(new MoviesArray(value.movieName, value.picture, value.movieYear));
   document.getElementById("movieList").innerHTML+=
   `<li id="list">
   <button onclick='loadStorage()'><a onclick='findIndex(${index})'href='otherPages/index2.html'>${value.movieName}</a></button> &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
   <img src= images/${value.picture} width="50" height="40">
   </li>
   `
    }
}