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
/* ********* 

  songs.js

  The app's list of Songs.  Each song will be represented as an object, for example:

  { 
    id: "A1S1",
    artistId: "A1",
    title: "Burn",
    album: {name: "The Crow: Original Motion Picture Soundtrack", imageURL: "https://upload.wikimedia.org/wikipedia/en/7/72/The_Crow_soundtrack_album_cover.jpg"},
    year: "1994",
    duration: 398
  }

 ********* */

window.songs = [
  { 
    id: "A1S1",
    artistId: "A1",
    title: "Bad Fella",
    album: {name: "MooseTape", imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Moosetape.jpg/220px-Moosetape.jpg"},
    year: "2018",
    duration: 217
  },
  { 
    id: "A1S2",
    artistId: "A1",
    title: "Calaboose",
    album: {name: "PBX-1", imageURL: "https://e.snmc.io/i/1200/s/71966c2993c417f0a575b14867c67d18/10612167"},
    year: "2021",
    duration: 244
  },
  { 
    id: "A1S3",
    artistId: "A1",
    title: "295",
    album: {name: "No Name", imageURL: "https://cdns-images.dzcdn.net/images/cover/ba14fdb9ba2cc83f40de1ab40c78920d/264x264.jpg"},
    year: "2021",
    duration: 269
  },
  { 
    id: "A1S4",
    artistId: "A1",
    title: "Goat",
    album: {name: "Stiches", imageURL: "https://cdns-images.dzcdn.net/images/cover/dfcc569be8555226fdf0e12cea894e34/264x264.jpg"},
    year: "2020",
    duration: 214
  },
  { 
    id: "A1S5",
    artistId: "A1",
    title: "Legend",
    album: {name: "Levels", imageURL: "https://cdns-images.dzcdn.net/images/cover/3f10590d97325dc7e658fe2528d155b6/500x500.jpg"},
    year: "2022",
    duration: 278
  },
  { 
    id: "A1S6",
    artistId: "A1",
    title: "Tochan",
    album: {name: "Moosedrill", imageURL: "https://i.pinimg.com/474x/5f/d2/9b/5fd29ba718b8e523a4661dc8d98b45c6.jpg"},
    year: "2018",
    duration: 221
  },
 
  { 
    id: "A2S1",
    artistId: "A2",
    title: "Excuses",
    album: {name: "Excuses", imageURL: "https://cdns-images.dzcdn.net/images/cover/5391b4939914cd5b531905906aec57af/264x264.jpg"},
    year: "2020",
    duration: 175
  },
  { 
    id: "A2S2",
    artistId: "A2",
    title: "Insane",
    album: {name: "Insane", imageURL: "https://cdns-images.dzcdn.net/images/cover/4d7398e81a1e9df8e4718a5edd1f76a3/264x264.jpg"},
    year: "2021",
    duration: 206
  },
  { 
    id: "A2S3",
    artistId: "A2",
    title: "Droptop",
    album: {name: "Brown Munde", imageURL: "https://cdns-images.dzcdn.net/images/cover/5320a60f6f35fd7b478f9eceaf87b472/264x264.jpg"},
    year: "2020",
    duration: 141
  },
  { 
    id: "A2S4",
    artistId: "A2",
    title: "Desires",
    album: {name: "Summer High", imageURL: "https://cdns-images.dzcdn.net/images/cover/9e9c694d78b3d11806569a975afed039/264x264.jpg"},
    year: "2021",
    duration: 167
  },
  { 
    id: "A2S5",
    artistId: "A2",
    title: "Toxic",
    album: {name: "True Stories", imageURL: "https://p16.resso.me/img/tos-alisg-v-2102/8a971267456543b3b410847fff6a242e~c5_200x200.jpg"},
    year: "2022",
    duration: 184
  },
  { 
    id: "A2S6",
    artistId: "A2",
    title: "Arrogant",
    album: {name: "Hidden Gems", imageURL: "https://i.scdn.co/image/ab67616d00001e02852d4ace5ba8cf082b045c38"},
    year: "2020",
    duration: 102
  },
  
  
  { 
    id: "A3S1",
    artistId: "A3",
    title: "Players",
    album: {name: "Way Ahead", imageURL: "https://cdns-images.dzcdn.net/images/cover/231c96a00208fcc0704c87a48de48d73/264x264.jpg"},
    year: "2022",
    duration: 171
  },
  { 
    id: "A3S2",
    artistId: "A3",
    title: "Mexico",
    album: {name: "B.T.F.U.", imageURL: "https://upload.wikimedia.org/wikipedia/en/7/7b/BacTHAfucUP.jpg"},
    year: "2021",
    duration: 206
  },
  { 
    id: "A3S3",
    artistId: "A3",
    title: "Gansta",
    album: {name: "Four You", imageURL: "https://cdns-images.dzcdn.net/images/cover/38b2c1f04f49311471cb3990364680f9/264x264.jpg"},
    year: "2022",
    duration: 190
  },
  { 
    id: "A3S4",
    artistId: "A3",
    title: "Adhiya",
    album: {name: "Don't Look", imageURL: "https://cdns-images.dzcdn.net/images/cover/1d565bc12c58d1a8c378cd48af205f92/264x264.jpg"},
    year: "2020",
    duration: 177
  },
  { 
    id: "A3S5",
    artistId: "A3",
    title: "Hint",
    album: {name: "Mixtape", imageURL: "https://a10.gaanacdn.com/images/albums/4/2781804/crop_480x480_2781804.jpg"},
    year: "2019",
    duration: 227
  },
  { 
    id: "A3S6",
    artistId: "A3",
    title: "Chittiyan",
    album: {name: "naNAna", imageURL: "https://c.saavncdn.com/640/Na-Na-Na-English-2018-20190321170411-500x500.jpg"},
    year: "2020",
    duration: 197
  },
  { 
    id: "A3S7",
    artistId: "A3",
    title: "YKWIM",
    album: {name: "Red Eyes", imageURL: "https://dhimanproductions.com/wp-content/uploads/2023/01/6-red-eyes-karan-aujla-poster-design-dhiman-productions-min.jpeg"},
    year: "2022",
    duration: 194
  },
  { 
    id: "A3S8",
    artistId: "A3",
    title: "Jhanjar",
    album: {name: "No Need", imageURL: "https://i.scdn.co/image/ab67616d00001e02ee7162902ed171d5cf6b6bc2"},
    year: "2020",
    duration: 202
  },
  
  
];
