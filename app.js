// require and instantiate express
var express = require('express')
var app = express()


// set the view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static('public'))

// blog home page
app.get('/', (req, res) => {
  // render `index.ejs` with the list of posts
  res.render('index')
})

app.get('/about', (req, res) => {

  res.render('about')
})

app.get('/contact', (req, res) => {

  res.render('contact')
})

// blog post
app.get('/posts/:id', (req, res) => {
  // find the post in the `posts` array
  /*const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]*/

  // render the `post.ejs` template with the post content
  res.render('posts/post' + req.params.id, {
    /*author: post.author,
    title: post.title,
    body: post.body*/
  })
})

app.listen(8090)

console.log('listening on port 8090')
