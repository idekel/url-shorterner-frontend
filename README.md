This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### NOTE: In the backend project there are the instruction to run the project with docker in which case ignore all the steps bellow as docker will take care of everything 

### You need to configure the backend project first. If you haven't please follow [this](https://github.com/idekel/url-hortener-backend) instructions

## Build front end

First change the URL property of ShortUrlService.js to 'http://localhost:8000/'

### `npm install`
To install all dependencies

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Copy files to backend

Replace {url-shorterner-frontend} and {url-shorterner-backend} for the directories where you cloned the projects

### `cp /{url-shorterner-frontend}/build/index.html /{url-shorterner-backend}/resources/views/welcome.blade.php`

### `cp -r /{url-shorterner-frontend}/build/static /{url-shorterner-backend}/public/`

This will copy build files to the backend to be serve from there.<br>
After this you should be able to access the home page an see the ReatJs app
Running. Ex: [localhost:8000](http://localhost:8000)


