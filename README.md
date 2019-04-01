# Card component

## Technologies

The following is a list of the technologies in use for this project.

* [NodeJS](https://nodejs.org/)
* [Webpack](https://webpack.js.org/)
* [React](https://reactjs.org/)
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/)
* [Styled Components](https://styled-components.com/)

## Approach

A brief overview of the approach taken during the build of the component:

1) Set up the modules needed for the project and added Webpack to host locally and bundle the JS. The modules added can be seen in the package.json
2) Added Jest and Enzyme modules for unit testing. 
3) Set up the initial component called Card (component/card/index.jsx). Initial unit test for the component was created at the same time.
4) Created dummy data in 'data/cardData.json' to use as a fake API to pass the data to the component.
5) Styled the Card component using the Styled Components framework to display a image and added a child component called TitleBanner.
6) Updated the Unit and snapshot tests for the Card component.
7) Styled the TitleBanner component using the Styled Components framework to display a banner with a background image and h2 element displaying text.
8) Updated the Unit and snapshot tests for the TitleBanner component.

## Assumptions

The following is a list of assumptions that I have made during the development of the component:

* It is a pure React component, so didn't use Typescript.
* If the component was going to be re-usable the data would be pulled from an API. As I do not have an endpoint with data, I have created dummy data in 'src/data/cardData.json' to pass into the props of the component.
* As the image was 315px x 177px I have choosen for the browser to display the image at its natural size, the banner will then scale and responed to the size of the image
* Made the assumption that the font was 'sans-serif'.


## What extra could of been done (if more time)

* Pull the data from API instead of using a local JSON file
* Making the component a link to another page.
* Could lazy load different size images or use srcset, if you wanted to have different size images depending on the device.
* More testing could be done to ensure it is support on all devices (Mobile, Tablets etc).
* Bundle/code split the webpack file better for performance
* Could add image compression to ensure large images do not get passed through to the component
* Could of added animations for loading the images and text in
* Could of passed different colours through the props to change colour of the text and banner background.

## Build - (Local Only)

In the root directory run the following commands in a command line of your choice:
* npm install
* npm start
> Go to [localhost:8080](http://localhost:8080/) in your browser to run the site

## Github Pages

The responsive component can be found at: https://fradleyjoedev.github.io/card-component/

