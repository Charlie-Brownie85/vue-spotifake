# spotify-search-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### SOME DEV NOTES

- This project has been built with [Vue.js](https://vuejs.org/) and [Vuex](https://vuex.vuejs.org/), using SCSS and some CSS custom vars for styling.
- It's consuming [Spotify's Search API](https://api.spotify.com/v1/search) for all the searches.
- The Auth Flow followed has been the [Implicint Grant Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) from Spotify Auth Guide, as there's no Server Side code in this project. Spotify User login will be requested to use this app.
- It shows results for all 3 major categories (albums, artists and tracks) all together. The initial max results is cap at 8 per category, but all available results for one single category can be displayed when clicking on "see more".
