
let addSongBtn = document.getElementById("addSong");
let playList = [];

addSongBtn.addEventListener('click', (event) => {
    // playList.innerText='';
    event.preventDefault();
    addSongs();
})
function addSongs() {

    let artist = document.getElementById("artist").value;
    let duration = document.getElementById("duration").value;
    let genre = document.getElementById("genre").value;
    let songTitle = document.getElementById("songTitle").value;

    if (songTitle && artist && duration && genre) {

        let song = { songTitle, artist, duration, genre }
        playList.push(song);
        console.log(playList);
        displayData();
        clearForm();
    } else {
        alert('please cheak some details is empty ?');
    }


}

function displayData(filteredSongs=null) {
    let display = document.getElementById("display");
    display.innerText = '';
    const songsToDisplay = filteredSongs || playList;
    songsToDisplay.forEach((songs, index) => {
        console.log(songs);
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        deleteBtn.innerText = "deleteBtn";
        deleteBtn.id = "deleteBtn";

        deleteBtn.addEventListener('click', () => deleteBtnFun(index));

        editBtn.innerText = "edit";
        editBtn.id = "editBtn"
        editBtn.addEventListener('click', () => editBtnFun(songs, index));

        p1.innerText = songs.songTitle;
        p1.className = 'detailsOPlayList'

        p2.innerText = songs.artist;
        p2.className = 'detailsOPlayList'

        p3.innerText = songs.duration;
        p3.className = 'detailsOPlayList'


        p4.innerText = songs.genre;
        p4.className = 'detailsOPlayList'

        display.append(p1, p2, p3, p4, deleteBtn, editBtn);

    })
}


function deleteBtnFun(index) {
    playList.splice(index, 1)
    displayData();
}

function editBtnFun(songs, index) {
    let artist = document.getElementById("artist");
    let duration = document.getElementById("duration");
    let genre = document.getElementById("genre");
    let songTitle = document.getElementById("songTitle");
    artist.value = songs.artist;
    duration.value = songs.duration;
    genre.value = songs.genre;
    songTitle.value = songs.songTitle;
    console.log(songs);
    console.log(index);

}

function clearForm() {
    document.getElementById("artist").value = '';
    document.getElementById("duration").value = '';
    document.getElementById("genre").value = '';
    document.getElementById("songTitle").value = '';
}


document.getElementById('search').addEventListener('input',()=>{
    let query = document.getElementById("search").value.toLowerCase();
    console.log(query);
    let filteredSongs = playList.filter((song) => {
        return song.songTitle.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
    })
    if (filteredSongs.length >0) {
        displayData(filteredSongs);
    }
    else{
        alert("No result found");
        displayData();
    }


});