# Blog - React DOM Frontend

This app is part of a project where we showcase the experience from building a DOM based React app with the intention of injecting it into a React Native app via a Web View

This app will be connected to a backend:
[Node Backend](https://github.com/trevorkirpaul/Blog-Backend-Main)

The base repo is `develop`

All work must be done in a separate branch, using pull requests to merge code to `develop`

## Env Setup

A `config.js` file will be needed in the future, as we start making API calls. This file will contain credentials such as the API URL. It will never contain passwords as all authentication will be done view JWT.

```javascript
// src/config.js
export default {
  API: null // URI for Node Backend
};
```
