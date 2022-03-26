# react-netflix-clone-course
- Nouaaman Roudane
-create .env file and past this with your api key:
REACT_APP_TMDB_API_KEY = "your_api_key"
REACT_APP_TMDB_API_URL = "https://api.themoviedb.org/3"
REACT_APP_TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/original"


## Features

-   Login
-   Who's watching
    -   Create new profile
    -   Edit profile
    -   Delete profile
-   Home page
    -   Section by type
    -   Top shows
-   My List (care, this is scoped to a profile)
    -   Add to my List
    -   Remove from my List
-   Display details of a show
    -   Movie: description, actors, cover, etc
    -   Series: list of episodes, description, actors, cover,
-   Search

### To go further

-   Internationalization 
-   Display trailers from youtube

## How to get data

You have to use [this](https://www.themoviedb.org/) to get all your data. You first have to create an api key then you are free to use it.
[Documentation](https://developers.themoviedb.org/3)

## How to store data

To store data about user we will use localeStorage. This is unsafe for this kind of data but this is not the purpose of the course.
[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Routing

For your routing use react-router-dom.
[Documentation](https://v5.reactrouter.com/web/guides/quick-start)

## Design

You have to use MUI lib to build your interfaces.
[Documentation](https://mui.com/)

![](Assets/homepage.png)
![](Assets/login.png)
![](Assets/movieDetails.png)
![](Assets/mylist.png)
![](Assets/search.png)
![](Assets/sectionByType.png)
![](Assets/serieDetails.png)
![](Assets/serieEpList.png)
![](Assets/topshows.png)
![](Assets/whoswatching.png)
