# Blog - React DOM Frontend

This app is part of a project where we showcase the experience from building a DOM based React app with the intention of injecting it into a React Native app via a Web View.

This app will be connected to a backend:
[Node Backend](https://github.com/trevorkirpaul/Blog-Backend-Main)

The base repo is `develop`

All work must be done in a separate branch, using pull requests to merge code into `develop`

## Env Setup

A `config.js` file is now necessary to run this app.

```javascript
// src/utils/config.js
export default {
  API: null // URI for Node Backend
};
```

## Reusable Components

### **Button**

props:

- `label`
  - Button label/text
- `onClick`
  - fxn invoked onClick
- `type`
  - type of button in regards to stying. Can be:
    - null
    - ghost
    - danger

## **TextField**

props:

- `type`
- `name`
- `placeholder`
- `value`
- `onChange`
  - fxn invoked onChange
- `error`
  - bool that renders error styling

### **TitlePanel**

props:

- `title`
  - h1 header
- `subtitle`
  - h2 header
- `message`
  - paragraph element

> if h2 or p are null, those elements and their containers don't render
