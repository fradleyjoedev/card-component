# Card component

## Technologies

The following is a list of the technologies in use for this project.

* [NodeJS](https://nodejs.org/)
* [Webpack](https://webpack.js.org/)
* [React](https://reactjs.org/)
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/)
* [Styled Components](https://styled-components.com/)

## Assumptions

The following is a list of assumtions that I have made during the development of the component:

* It is a pure React component, so didn't use Typescript.
* If the component was going to be re-usable the data would be pulled from an API. As I do not have a endpoint with data, I have created dummy data in 'src/data/cardData.json' to pass into the props of the component.
* The image given was only 315px x 177px so in order for the component to be responsive I have choosen to set the background-size to cover. This will streach the image on larger displays but may cause the image to be distored/pixalated. 
* Made the assumption that the font was 'sans-serif'

## What extra could of been done (if more time)

* Pull the data from API instead of using a local JSON file
* Making the component a link to another page.


## Build - (Local Only)

In the root directory run the following commands in a command line of your choice:
* npm install
* npm start
> Go to [localhost:8080](http://localhost:8080/) in your browser to run the site

## Github Pages

The responsive component can be found at: https://fradleyjoedev.github.io/card-component/

