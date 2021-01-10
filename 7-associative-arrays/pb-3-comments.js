//PB-3.  Comments 
function comments(arr) {
    let articleUser = {}
    let userList = []
    let articleComment = {}

    for (let article of arr) {
        if (article.includes('article')) {
            let articleName = article.substring(8)
            articleUser[articleName] = []
            articleComment[articleName] = {}

        }
    }

    for (let user of arr) {
        if (user.includes('user')) {
            let userName = user.substring(5)
            userList.push(userName)
        }
    }

    for (let comment of arr) {
        if (comment.includes('posts on')) {
            let [userAndArticle, commentTitleContent] = comment.split(': ')
            let [user, article] = userAndArticle.split(' posts on ')
            if (articleUser.hasOwnProperty(article) && userList.includes(user)) {
                articleUser[article].push(user)
                articleComment[article][user] = []
                articleComment[article][user].push(commentTitleContent)
            }
        }
    }

    let countComments = Object.keys(articleUser)
        .sort((a, b) => articleUser[b].length - articleUser[a].length)

    for (let movie of countComments) {
        console.log(`Comments on ${movie}`);

        let sortedUsers = articleUser[movie]
            .sort((a, b) => a.localeCompare(b))
            .forEach(x => {
                console.log(`--- From user ${x}: ${articleComment[movie][x][0].split(', ').join(' - ')}`);
            });


    }

}

comments([
    'user XSeRTest',
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'XSeRTest posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])
