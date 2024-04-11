function filterSongs(array) {

    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 1; i <= array[0]; i++) {
        const [type, name, time] = array[i].split("_");
        songs.push(new Song(type, name, time));
    }

    const filterType = array[array.length - 1];

    if (filterType === "all") {
        songs.forEach(song => console.log(song.name));
    } else {
        songs.filter(song => song.typeList === filterType).forEach(song => console.log(song.name));
    }
}


filterSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

filterSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

filterSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);