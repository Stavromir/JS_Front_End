function movieInfo(input) {

    let movies = [];

    input.forEach(el => {
        if (el.includes('addMovie')) {
            let filmName = el.split("addMovie ")[1];
            movies.push({name: filmName});
        } else if(el.includes("directedBy")) {
            const [filmName, director] = el.split(" directedBy ");

            let movie = movies.find(el => el.name === filmName);

            if (movie) {
                movie.director = director;
            }
        } else if (el.includes("onDate")) {
            const[filmName, date] = el.split(" onDate ");

            let movie = movies.find(el => el.name === filmName);

            if (movie) {
                movie.date = date;
            }
        }
    });

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

movieInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);