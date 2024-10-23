

# FrontendApp
This project is an Angular-based web application that interacts with the SWAPI (Star Wars API). 
The app allows users to explore Star Wars by displaying various elements such as films, characters, and planets in both list and detailed views. 
Users can also navigate seamlessly between related items across different views.

# Features
Fetches data from the Star Wars API (SWAPI).
Displays lists of Star Wars films, characters, and planets.
Detail view for individual films, characters, and planets.
Seamless navigation between related views (e.g., viewing all characters in a specific film).
Responsive design for mobile and desktop platforms.

# App Views
-List View
The app features list views for different Star Wars elements fetched from the SWAPI:

Films: A list of Star Wars films.
Characters: A list of characters with their name, gender, and other details.
Planets: A list of planets with details such as climate, terrain, and population.

-Detail View
Each element in the list view can be clicked to see more details. 
The user can easily navigate between different views in the app.
From a film detail view, the user can access the list of characters in that film.
From a character detail view, the user can view the planet they come from or films they appear in.

# Technologies Used
-Angular v18
-TypeScript
-RxJS
-HTML5 / SCSS
-SWAPI (Star Wars API): The external API used to fetch Star Wars data.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


