//constants

const musicLibscontainer = document.getElementById('music-libs');
// const audioPlayer= Document.getElementById('audio player');

// var currentSongObj={};
// var defaultImage="assests/images/defaultImage.gif";


//core  logic
window.addEventListener('load',bootUpApp);

function bootUpApp(){
    fetchandRenderAllSections();
}
function fetchandRenderAllSections(){
    //fetch all section data
    fetch('/assets/js/ganna.json')
    .then(res=>res.json())
    .then(res=>{
        console.table('response',res);
        const{cardbox}=res;
        if(Array.isArray(cardbox)&& cardbox.length)
        {
            cardbox.forEach(section =>{
            const{songsbox ,songscards} =section;
            renderSection(songsbox,songscards);
            })
        }
    })
    // .catch((err)=>{
    //     console.error(err);
    //     alert('error failing data');
    // } )
   
}
function renderSection(title,songsList){
    const songsSection = makeSectionDom(title,songsList);
    musicLibscontainer.appendChild(songsSection);
}
function makeSectionDom(title,songsList){
    const sectionDiv = document.createElement('div');
    sectionDiv.className='songs-section';
    // add songs html
    sectionDiv.innerHTML = `
       <h2 class="section-heading">${title}</h2>
       <div class="songs-cont">
          ${songsList.map(songObj=>buildSongCardDom(songObj)).join('')}
       </div>   
    `
    console.log(sectionDiv);
    return sectionDiv;
}
 function buildSongCardDom(songObj){
    return `<div class="song-card">
       <div class="img-cont">
          <img src="/${songObj.image_source}" alt="${songObj.song_name}">
           <div class="overlay"></div>
       </div>
       <p class="song-name">${songObj.song_name}</p>
    </div>`;
 }
 
 //music player functions

 