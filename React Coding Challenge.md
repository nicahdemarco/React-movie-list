# React Coding Challenge

The goal of this coding challenge is to give you an opportunity to showcase your knowledge and show us how you work on a real-life project.
We are intentionally not forcing you to use any particular library (other than React) so you don't have to learn something new just for a code challenge, but please take into account that even when we are not expecting a production ready app we do expect you to be able to explain why you picked those dependencies for the job.
Also, please be mindful about not adding features outside of the scope of this code challenge so you don't end up investing more time than it's needed.

## Introduction

Your local movie theater is in dire need of attracting new audience.
To do this, they're asking you to build a simple web application that allows users discover new movies and search for them.
Since they don't have a backend service, the first version of the application will be built using the public api https://developers.themoviedb.org/3

## Features

The movie theater is requesting the following features for the first version

### Discover

Upon opening the web application, users should be able to see a list of movies suggested by the application and sorted by popularity.
<br>
Pagination is not required for this version.

- API reference: https://developers.themoviedb.org/3/discover/movie-discover

### Search

In the discovery view, add a search bar at the top to allow users to query information about movies.
<br>
If the search field is empty, show the discovery results

- API reference: https://developers.themoviedb.org/3/search/search-movies

### Filter by rating

The rating is a value between 0 and 10.
<br>
Add a rating filter in the form of five stars like [here](https://dribbble.com/shots/1053518-Filters).
<br>
When selecting a star, all the stars to the left should be selected as well.
<br>
The range of each star is 2, so, if the first star is selected, only movies with rating 0-2 should appear. If the second star is selected, only movies with rating 2-4 should appear, and so on.
<br>
If the star clicked is the currently active, disable the filter.
<br>
Do this filtering on the client side.

- Rating field in the movie model: `vote_average`

### Detail view

Upon clicking, a detail view must be shown, displaying more information about the movie.

## Design

We do not require jaw dropping designs.
<br>
A clean, minimal UI will do.
<br>
We do want to see the movie images provided by the API.
[Here's](https://dribbble.com/shots/1682568-Flixus-Homepage-WIP/attachments/266476) a design suggestion, but it's up to you.

## Development requirements

- Use `create-react-app` for this project
- Use latest version of React
- Provide all the steps necessary to launch the application

## Deliverables

- The project's codebase delivered somehow (you pick).
- Anything else you consider is important for understanding the application.
