// 4. Movies 

function movies(arr) {
    let movieArr = [];
    for (const line of arr) {
        if (line.includes("addMovie")) {
            let curMovie = {};
            let name = line.substring(9);
            curMovie.name = name;
            movieArr.push(curMovie);
        } else if (line.includes("directedBy")) {
            let [movie, movieDirector] = line.split(" directedBy ");
            movieArr.find((x) => {
                x.name === movie ? (x.director = movieDirector) : "";
            });
        } else {
            let [movie, movieDate] = line.split(" onDate ");
            movieArr.find((x) => {
                x.name === movie ? (x.date = movieDate) : "";
            });
        }
    }

    movieArr.forEach((m) => {
        if (m.name && m.director && m.date) {
            console.log(JSON.stringify(m));
        }
    });
}

movies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen"
]);
