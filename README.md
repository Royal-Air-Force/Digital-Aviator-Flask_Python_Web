# RAF HACKATHON THEME

This is a template Flask app. The Flask app is within the ```api``` folder, and is structured to
provide a REST API and to serve HTML generated from the built ReactJS app. The root folder is the
ReactJS app.

## To run the app live

### Step 0: Install dev tools

Install the following tools (Mac: via 'brew install NAME'):-

- yarn 
- node (including npm)
- Docker Desktop (free version)
- python3 (including pip3)

Type in ```npm install``` from the root folder to install dependencies.

### Step 1: Build the react app

```sh
yarn build
```

The above copies the built index.html, css, js, and images to the api/static folder. DO NOT MANUALLY EDIT THESE FILES as they will be overridden when you make changes to your react app.

### Step 1a: Test locally

```sh
cd api
flask run
```

Click the link from the above to see your app rendered!

### Step 2: Build and run your Flask REST API and Web UI app.

Execute the following:-
```sh
cd api
docker build -t flask-container .
aws lightsail create-container-service --service-name flask-service --power small --scale 1
aws lightsail push-container-image --service-name flask-service --label flask-container --image flask-container
# Note the number at the end of the line for the name of the container image here, and edit containers.json to match
aws lightsail create-container-service-deployment --service-name flask-service --containers file://containers.json --public-endpoint file://public-endpoint.json
```

Note down the final URL in the text file that results from the above command. Types this URL into your browser (it may take up to 5 minutes to appear).

## To change the content in the Header Title area

- Edit App.js
- Between ```<HackathonHeader>``` tags, add any HTML you need. By default, it is just text
- To change the styles, edit App.css and edit the HACKATHON HEADER values

## To create multiple 'pages'

ReactJS is a Single Page Application (SPA) approach. A multi-page application can be simulated using a wrapped context.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
