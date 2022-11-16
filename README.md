# Eiga - A Ghibli movie review site

## About
![Preview](./public/assets/images/Eiga.gif)


This site is a collaboration between developers to build a site with REStful routes using express.js in a node.js environment. The site is a studio specific(Ghibli) movie site to view and review individual movies. The site features a user validation to sign in to the site, view movies and review movies.

## Deployment Site

[Eiga-reviews](https://eiga-reviews.herokuapp.com/)

## Required Installation

[bad-words](https://www.npmjs.com/package/bad-words)

[bcrypt package](https://www.npmjs.com/package/bcrypt)
 
[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
 
[dotenv package](https://www.npmjs.com/package/dotenv)

[express](https://www.npmjs.com/package/express)
 
[express-session](https://www.npmjs.com/package/express-session)
 
[MySQL2](https://www.npmjs.com/package/mysql2)
 
[Sequelize](https://www.npmjs.com/package/sequelize)


## Technologies Used

HTML, Github, Javascrpit, CSS, Git Bash, Bootstrap 4.6.2

## User Story
```
AS A Ghibli movie fan
WE WANT a site to list of Ghibli Studio movies
SO THAT WE can view and review Ghibli movies

AS A User
I WANT To be able to view all Ghibli Movies
SO THAT I can pick a specific one

AS A User
I WANT To be able to search Ghibli movie 
SO THAT I can view a specific Ghibli movie and its associated reviews

AS A User
I WANT To be able to click on a button and see a modal to input a review
SO THAT So that I can type out a review

AS A User
I WANT To be able to submit the review form 
SO THAT To post my review on the movie 
```

## Code Snippets

Below is a code snippet of the process of dynamically generating the selected movie card
```
function generateLeftSide(data){
  const divEl = document.getElementById('filmTitle');
  let filmTitle = document.createElement('h2');
  filmTitle.setAttribute('class', 'ml-5 bg-light px-2 rounded text-center');
  filmTitle.textContent = data.title;
  divEl.appendChild(filmTitle);
  const imgCont = document.getElementById('imgCont');
  let filmImage = document.createElement('img');
  filmImage.setAttribute('class', 'img-thumbnail');
  filmImage.setAttribute('src', data.image);
  imgCont.appendChild(filmImage);

  document.body.style.backgroundImage= `url(${data.movie_banner})`;
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize = 'cover';
}
```

Below is a code snippet for how to create a review to post

```
router.post('/:id/review', async (req,res) => {
    try {console.log(req.session)
        const reviewData = await Review.create({
               content: filter.clean(req.body.content),
               user_id: req.session.user_id,  
               movie_id: req.body.movie_id,
               title: filter.clean(req.body.title)
        });
        res.status(200).json(reviewData)
    } catch (err) {
        console.log(req.session)
        res.status(500).json(err)
    }
    console.log("create a review for a certain movie");
});
```

## Thrid Party APIs

[Movie database for Ghilbli films](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)
 

## Developers Github

[Jeff Chan](https://github.com/chanjeff520)

[Senay Gebrat](https://github.com/senaygebrat)

[Vasu Apparao](https://github.com/Elduderino23)

[Aaron Socher](https://github.com/AMESocker)
