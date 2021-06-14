//song list
let All_song = [
   {
     name: "Em đéo biết nữa anh ơi",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "7uppercuts"
   },
   {
     name: "Rap team ĐỤT",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Thanos & Bao Chuẩn"
   },
   {
     name: "Độc Thoại",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "QUYECH"
   },
   {
     name: "Barcelona",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Ed Sheeran"
   },
   {
     name: "What do i know?",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Ed Sheeran"
   },
   {
    name: "HUMBLE",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Kendrick Lamar"
   },
   {
    name: "Party of Buddha",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "Chị Cả ft. Hoa, Bommie Lotus"
   },
   {
    name: "WOAH",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: "KRYPTO9095 FT. D3MSTREET"
   },
   {
    name: "Cháy",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "DSK"
   },
   {
    name: "Ai cho ai",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: "FloD ft. M! (Giang Nguyen)"
   },
   {
    name: "Day by day",
    path: "music/11.mp3",
    img: "images/11.jpg",
    singer: "T-Ara"
   },
   {
    name: "Xin lỗi",
    path: "music/12.mp3",
    img: "images/12.jpg",
    singer: "B-Ray"
   },
   {
    name: "Sun flower",
    path: "music/13.mp3",
    img: "images/13.jpg",
    singer: "Paddy Sun"
   },
   {
    name: "Ai?",
    path: "music/14.mp3",
    img: "images/14.jpg",
    singer: "B-Ray"
   },
   
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/
