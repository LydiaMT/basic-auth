# Lab 05 - 401 JavaScript

# API Server

## Author: Lydia Minehan-Tubic

### Links and Resources

✨ [Deployed Heroku Site](https://lydia-basic-auth.herokuapp.com/)

✨ [GitHub Actions](https://github.com/LydiaMT/basic-auth/actions)

✨ [Pull Request](https://github.com/LydiaMT/basic-auth/pull/2)


### Setup

- Clone down to your device
- In the root directory, run `npm install` to install node modules
- Run `nodemon` to see your live server via local host in your browser.

### Use

- You can create a new account via the /signup route, then sign into the route with the /signin route. Use [swagger.io](https://inspector.swagger.io/builder). 

```JS
{ "username": "TEST", "password": "TEST" }
```

### Test

In the command line at the root directory, `run npm test` to make sure all test are passing as expected.

Use [Code 401 JavaScript Assignment Runner](https://javascript-401.netlify.app/basic-auth)

### Architecture

[Atlas MongoDB Intigration](https://github.com/codefellows/seattle-301d72/blob/master/README.md)

```git
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── auth.router.test.js
│   ├── basic-auth.test.js
│   ├── bearer-auth.test.js
│   ├── 500.test.js
│   ├── model-finder.test.js
│   ├── mongo.js
├── src
│   ├── auth
│   │   ├── router.js
│   │   ├── middleware
│   │   │   ├── basic.js
│   │   │   ├── bearer.js
│   │   │   ├── oauth.js
│   │   ├── models
│   │   │   ├── users-model.js
│   ├── middleware
│   │   ├── 404.js
│   │   ├── 500.js
│   │   ├── model-finder.js
│   ├── server.js
├── index.js
└── package.json
```

### UML / WRRC

![WRRC](assets/wrrcLab05.jpg)

### Contributions 

Pair progammed with [Jason Taisey](https://github.com/JTaisey389)

