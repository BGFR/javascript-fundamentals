//PB-4.  Book Shelf 

function bookShelf(arr) {
    let genreObj = {}
    let idCheck = '';
    let idObj = {}

    for (let genre of arr) {
        if (genre.includes('->') && !idCheck.includes([genre[0]])) {
            let [id, bookGenre] = genre.split(' -> ')
            genreObj[bookGenre] = []
            idCheck += genre[0]
            idObj[bookGenre] = Number(id)
        } else if (genre.includes(':')) {
            let [bookName, args] = genre.split(': ')
            let [author, genreOfBook] = args.split(', ')
            if (genreObj.hasOwnProperty(genreOfBook)) {
                genreObj[genreOfBook].push(bookName + ': ' + author)
            }

        }
    }

    let bookCount = Object.keys(genreObj)
        .sort((a, b) => genreObj[b].length - genreObj[a].length)

    for (let row of bookCount) {
        console.log(` ${idObj[row]} ${row}: ${genreObj[row].length}`);
        for (let one of genreObj[row]) {
            console.log(`--> ${one}`);
        }

    }

}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])
