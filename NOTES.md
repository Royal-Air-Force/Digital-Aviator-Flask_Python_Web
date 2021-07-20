# OLD NOTES


Step 2: Configure and publish the ReactJS static HTML application.

Edit package.json for the React app, and change the proxy setting from ```"proxy": "http://localhost:5000"``` to ```"proxy": "https://myhostname:443"```. Now publish the React app, e.g. to lightsail too. (A Sample Dockerfile is provided in the root folder) as follows:-

```sh
cd ..
docker build -t react-container .
aws lightsail create-container-service --service-name react-service --power small --scale 1
aws lightsail push-container-image --service-name react-service --label react-container --image react-container
aws lightsail create-container-service-deployment --service-name react-service --containers file://containers.json --public-endpoint file://public-endpoint.json
```

Again, note down the URL. This URL is the URL to use in your web browser. If it works, you should see the time since Jan 1st 1970 appear in the web page of the React application. If it failed, view the web browser javascript console.


## Available Scripts

In the project directory, you can run:

### `yarn start-api`

Runs the Flask rest api app. Must be ran before yarn start for the webapp.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.