# Human Learning - Website Repository

Uses Node.js

## Installing on AWS

### Installing/Updating Node.js, NPM and Git

`sudo su`

If node is installed already, first remove nodejs and npm using the following command

`yum remove -y nodejs npm`

Setup the repo for Node version 6

`curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -`

Install Node. This will also install npm

`yum install -y nodejs`

Install git

`yum install -y git`

Install forever

`npm install -y forever`

Exit su

`exit`

## Installing the site

```
git clone git@github.com:humanlearnable/site.git humanlearnable-site
cd humanlearnable-site
npm install
```
### Running the site

```
cd humanlearnable-site
node app.js
```

or to run forever

`forever start --spinSleepTime 1000 server.js`

Now browse to `http://127.0.0.1:8080` to view the site.

## Writing a post

To write a post, first make a copy of the post template `post0.ejs` in the `partials/posts` directory and rename it `post[num].ejs`. You need to replace `[num]` with the next post number.

Add your content to the your post. Also make sure you update `index.ejs` with the post title, author and post preview.

Any images or other resources go in the `public/res` folder in a subfolder called `post[num]`, where again `[num]` is replaced by the post number.


## Copyright and License

Baseed on the theme:
[Freelancer](http://startbootstrap.com/template-overviews/freelancer/) is a one page freelancer portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). This theme features several content sections, a responsive portfolio grid with hover effects, full page portfolio item modals, and a working PHP contact form.

Copyright 2017 Mozilla Campus Club Birmingham

Released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/gh-pages/LICENSE) license.
