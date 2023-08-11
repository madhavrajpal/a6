/* ********* 

  BTI225 – Assignment 06

  I declare that this assignment is my own work in accordance with
  Seneca Academic Policy. No part of this assignment has been
  copied manually or electronically from any other source
  (including web sites) or distributed to other students.

  Please update the following with your information:

  Name:       MADHAV RAJPAL
  Student ID: 112037221
  Date:       10/08/2023
 
********* */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

function buildMenu() {
  let menu = document.getElementById("menu");
  menu.innerHTML = ""; // clear the menu out first?

  for (let i = 0; i < artists.length; i++) {
    menu.innerHTML += `<span id="navtxt" onclick='showSelectedArtist("${artists[i].id}")'>${artists[i].name}</span>&nbsp;`;
  }

}

function showSelectedArtist(artistID) {
  console.log("TODO: Show Artist with ID: " + artistID)

  let selectedArtistContainer = document.getElementById("selected-artist");

  let selectedArtist = artists.find(artist => artist.id == artistID);


  selectedArtistContainer.innerHTML = `<center><span style="font-family:'Lexend Deca';color:white">${selectedArtist.name} - <a href="${selectedArtist.links[0].url}">${selectedArtist.links[0].name}</a></span></center>`

  showCardsByArtist(artistID);

}
async function getQuote(){
  let quoteParagraph = document.getElementById("quote");
  const fetchRes = await fetch("https://dummyjson.com/quotes/random");
  const quote = await fetchRes.json();

  console.log(quote.quote)
  if (quote.quote.length<60) {
    console.log(quote.quote)
    console.log(quote.quote.length)
    return quote.quote;
  }
  else{
    console.log(quote.quote)
    console.log(quote.quote.length)
     return `${ quote.quote.slice(0,60)}...`;
  }

}

async function showCardsByArtist(artistID) {
  let artistsSongs = songs.filter(song => song.artistId == artistID);
  
  const songForm = document.getElementById("songForm");
  songForm.classList.add("hidden");
  let cardContainer = document.getElementById("card-container");

  cardContainer.innerHTML = "";


  for (let i = 0; i < artistsSongs.length; i++) {
    const randQuote = await getQuote();
    if (artistsSongs[i].artistId == "A3" && i == 2) {
   
      cardContainer.innerHTML += `<a href="#forms"><div id="cards" onclick="showSongForm('${artistsSongs[i].id}')"><p class="text"><i class="fa fa-play" style="font-size:24px;"></i></p><img class="image" src="${artistsSongs[i].album.imageURL}" ><br><font id="txt" style="color:black;font-weight:bold;font-style: ;font-size:25px;text-align:left">${artistsSongs[i].title}</font> <font style="color:black">- ${artistsSongs[i].year}<</font>br><font id="txt">Album</font> <font style="color:black"> - ${artistsSongs[i].album.name}</font><br><font id="txt">Duration</fon<font style="color:black">t> - ${(artistsSongs[i].duration / 60).toFixed(2)} mins  </font><br> <p style="color:white;font-size:10px;text-align:left">${randQuote}</p> </div></a>&nbsp;`;
    }
    else if (artistsSongs[i].artistId == "A3" && i == 3) {
      cardContainer.innerHTML += `<a href="#forms"><div id="cards" onclick="showSongForm('${artistsSongs[i].id}')"><p class="text"><i class="fa fa-play" style="font-size:24px;"></i></p><img class="image" src="${artistsSongs[i].album.imageURL}" ><br><font id="txt" style="color:black;font-weight:bold;font-style: ;font-size:25px">${artistsSongs[i].title}</font><font style="color:black"> - ${artistsSongs[i].year}</font><br><font id="txt">Album</font> <font style="color:black"> - ${artistsSongs[i].album.name}</font><br><font id="txt">Duration</font><font style="color:black"> - ${(artistsSongs[i].duration / 60).toFixed(2)} mins</font>  <br><p style="color:white;font-size:10px;text-align:left">${randQuote}</p></div></a>&nbsp;<br>`;
    }
    else if (i == 2) {
      cardContainer.innerHTML += `<a href="#forms"><div id="cards" onclick="showSongForm('${artistsSongs[i].id}')"><p class="text"><i class="fa fa-play" style="font-size:24px;"></i></p><img class="image" src="${artistsSongs[i].album.imageURL}" ><br><font id="txt" style="color:black;font-weight:bold;font-style: ;font-size:25px">${artistsSongs[i].title}</font><font style="color:black"> - ${artistsSongs[i].year}</font><br><font id="txt">Album</font> <font style="color:black"> - ${artistsSongs[i].album.name}</font><br><font id="txt">Duration</font><font style="color:black"> - ${(artistsSongs[i].duration / 60).toFixed(2)} mins</font>  <br><p style="color:white;font-size:10px;text-align:left">${randQuote}</p></div></a>&nbsp;<br>`;
    }
    else {
      cardContainer.innerHTML += `<a href="#forms"><div id="cards" onclick="showSongForm('${artistsSongs[i].id}')"><p class="text"><i class="fa fa-play" style="font-size:24px;"></i></p><img class="image" src="${artistsSongs[i].album.imageURL}" ><br><font id="txt" style="color:black;font-weight:bold;font-style: ;font-size:25px">${artistsSongs[i].title}</font><font style="color:black"> - ${artistsSongs[i].year}</font><br><font id="txt">Album</font> <font style="color:black"> - ${artistsSongs[i].album.name}</font><br><font id="txt">Duration</font><font style="color:black"> - ${(artistsSongs[i].duration / 60).toFixed(2)} mins</font>  <br> <p style="color:white;font-size:10px;text-align:left">${randQuote}</p></div></a>&nbsp;`;
    }
  }




}

function showSongForm(songId) {
  console.log("Clicked song ID:", songId);
  const songForm = document.getElementById("songForm");
  songForm.classList.remove("hidden");
  const song = songs.find(song => song.id === songId);

  document.getElementById("songId").value = song.id;
  document.getElementById("artistId").value = song.artistId;
  document.getElementById("title").value = song.title;
  document.getElementById("year").value = song.year;
  document.getElementById("duration").value = song.duration;


}


document.addEventListener("DOMContentLoaded", function () {
  buildMenu();
  
  showSelectedArtist(artists[0].id)


  const songForm = document.getElementById("songForm");


  songForm.onsubmit = function (event) {
    event.preventDefault();

   
      const songid =  document.getElementById("songId").value;
      const duration = document.getElementById("duration").value;
      const title= document.getElementById("title").value;
      const year= document.getElementById("year").value;
    
    const index = songs.findIndex(song => song.id === songid);
    if (index !== -1) {
      songs[index].title = title;
      songs[index].year = year;
      songs[index].duration = duration;

    }

    const artistId = document.getElementById("artistId").value;
    const songForm = document.getElementById("songForm");
    songForm.classList.add("hidden");
    showCardsByArtist(artistId);
    
  };
});

