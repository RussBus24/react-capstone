# RussBus Movie App

For the Thinkful React-Capstone project curriculum.

### Movie App

This is a simple Movie rating app using React. You can search for movies which are pulled from a movie database API, then rate it based on violence, language and sensuality (I may add or alter these topics later). Based on your review, you'll be told how your rating stacks up with the movie's actual rating. This app is mainly for entertainment purposes only.

### How to use

Upon landing on the page, just enter a movie of your choice to search for. Try to be as specific as possible. Once the search result returns, you will have the ability to rate the film yourself based on three seperate criteria: Violence, Language & Sensuality. As you know, movies these days are given a Motion Pictures Association of America (MPAA) rating before they are released into theaters. For many, a movie's rating can be rather subjective. What one may percieve as the perfect rating for a film, others may think it to be too harsh or lenient.

Once you have answered all the ratings, click on Submit Rating to see how your ratings stack up against the movie's actual rating, :)

### Technical

This app was written using the following:
* Webpack frontend technology, encompassing HTML, CSS, jQuery, JavaScript, React.js & Redux.
* All functionality is handled using React components.
* API data is retrieved from http://www.omdbapi.com, a free web service for obtaining movie information.
* Backend/server side technology includes: Isomorphic-fetch (https://github.com/matthew-andrews/isomorphic-fetch) for API data retrieval within React.
* App tested using Mocha & Chai.

