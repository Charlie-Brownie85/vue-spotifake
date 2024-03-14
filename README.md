<!-- omit in toc -->
# SPOTIFAKE App

**Vue 3** music search app consuming free [Spotify API](https://developer.spotify.com/documentation/web-api). It retrieves results for Artists, Albums and Tracks categories.

It also displays detailed info for each individual item.

**note:** It **DOES NOT** have a music player nor PLAYS any song however.

- [🚩 Instalation](#-instalation)
- [🤖 Main technologies applied](#-main-technologies-applied)
- [🗝️ Key dev features](#️-key-dev-features)

## 🚩 Instalation

1. Clone the repository in a folder and install it and its dependencies
  ```
  yarn
  ```
  or
  ```
  npm install
  ```
2. Create an `env` file in the project's root folder.
Add the following variables:
```
VITE_SPOTIFY_CLIENT_ID=[your_spotify_client_id]
VITE_SPOTIFY_CLIENT_SECRET=[your_spotify_client_secret]
VITE_SPOTIFY_AUTH_URL=https://accounts.spotify.com/api/token
VITE_SPOTIFY_BASE_API_URL=https://api.spotify.com/v1
```
3. Follow the steps in [Spotify's Developers Documentation](https://developer.spotify.com/documentation/web-api) to obtain your Web API credentials and replace them in the `env` file above.
4. Run the app with `yarn dev` or `npm run dev`


## 🤖 Main technologies applied

This project has been developed using:

- [Vue 3](https://vuejs.org/) with **Composition API** and using `script setup`
- [TypeScript](https://www.typescriptlang.org/)
- [Vue router](https://router.vuejs.org/) for routing 🧭
- [Pinia](https://pinia.vuejs.org/) 🍍 as store solution
- [vue-i18n](https://kazupon.github.io/vue-i18n/) for translations 🈸
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader#readme) for SVG import ✨
- [axios](https://axios-http.com/) as the HTTP client 🛜
- [PostCss](https://postcss.org/) and [Tailwind](https://tailwindcss.com/) for styling 🎨
- [vueUse](https://vueuse.org/) for some utility functions and composables 🔩
- [Vite](https://vitejs.dev/) as build tool 🏗️
- [Vitest](https://vitest.dev/) and [@testing-library/vue](https://testing-library.com/) for unit testing 🧪
- [Husky](https://github.com/typicode/husky#readme) to trigger actions on Git Hooks 🐶

## 🗝️ Key dev features

Some of the features the app accomplishes and DevEx worth to mention:

- **Infinite scrolling** implementation in the category results view using `@vueuse/core`'s `useInfiniteScroll`
- Usage of **async components** with `<Suspense>`
- **Dark/Light theming** with tailwind and `@vueuse/core`
- Implemented **skeletons** as placeholder while async components load/ fetch data
- Dynamically injecting **SVG inline** with `vite-svg-loader` and some custom component
- **Auto-import of components** with `unplugin-vue-components`
- Enforcing **commit standard** with `husky` and `@commitlint`
- Ensuring all unit tests pass before pushing any git branch with `husky` and a `pre-push` git hook.

