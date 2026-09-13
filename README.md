# Soul Weather

A responsive weather app built with Angular. It shows the current weather for your location, a detailed 1-day forecast and a 3-day forecast for any city, and lets you keep a list of favorite cities.

**Live demo:** https://weather-app-cfd72.web.app

Built by Team Soul during an Angular internship in 2022.

## Features

- **Current weather for your location.** The app asks for your location with the browser's Geolocation API. If you don't allow it, it shows Lviv instead.
- **City search with autocomplete.** Suggestions appear after you type 3 characters.
- **1-day forecast.** Weather in 3-hour steps: temperature, feels like, pressure, humidity and wind.
- **3-day forecast.** Morning, afternoon and evening conditions for each day.
- **Favorite cities.** Tap the star on a forecast page to add a city, then open it from the header. Favorites are saved in the browser.
- **Light and dark themes.** Your choice is remembered between visits.
- **Time-of-day backgrounds.** The background changes for morning, day, evening and night.
- **Animated weather icons** for every WeatherAPI condition, with separate day and night versions.
- **Mobile layouts** for every page.

## Tech stack

- [Angular 13](https://angular.io/), TypeScript and RxJS
- SCSS
- [Angular Material](https://material.angular.io/), used only for the search autocomplete
- [WeatherAPI.com](https://www.weatherapi.com/) for weather data
- [Firebase Hosting](https://firebase.google.com/docs/hosting), deployed with GitHub Actions

## Getting started

### Requirements

- Node.js 22 (the version used in CI) and npm

### Install and run

```bash
git clone https://github.com/viravelmozhna/weather-app-angular.git
cd weather-app-angular
npm ci
npm run startDev
```

The app opens at http://localhost:4200.

### API key

The app needs a free API key from [WeatherAPI.com](https://www.weatherapi.com/signup.aspx). Put it in `apiKey` in both environment files:

- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production build)

> The key ships to the browser in the app's JavaScript, like any key in a frontend-only app. Use a free-tier key, not one tied to a paid plan.

## Scripts

| Command | What it does |
|---|---|
| `npm run startDev` | Starts the dev server and opens the app in your browser |
| `npm run build` | Builds for production into `dist/weather-app` |
| `npm run watch` | Rebuilds on every change (development build) |
| `npm test` | Runs unit tests with Karma and Jasmine |

## Pages

| URL | Page |
|---|---|
| `/` | Current weather for your location |
| `/details/:city` | 1-day forecast for a city |
| `/forecast/:city` | 3-day forecast for a city |

## Project structure

```
src/
├── app/
│   ├── landing-page/        # Current weather (home page)
│   ├── day-forecast/        # 1-day forecast page
│   ├── week-forecast/       # 3-day forecast page
│   ├── header/              # Logo, search, favorites, theme switch
│   ├── search/              # City search with autocomplete
│   ├── favorite-list/       # Favorite cities dropdown
│   ├── footer/
│   ├── loader/              # Loading animation
│   ├── services/            # WeatherAPI calls, favorites, theme, loader state
│   └── shared/enums/        # Weekday and month names
├── http-interceptors/       # Shows the loader while requests are in flight
├── environments/            # API URL and key
├── assets/images/           # Backgrounds, UI icons, weather icons
└── styles/                  # Global styles and variables
```

## Deployment

The app is hosted on Firebase Hosting (project `weather-app-cfd72`).

- **Every push to `main`** builds the app and deploys it to the live site ([workflow](.github/workflows/firebase-hosting-merge.yml)).
- **Every pull request** gets a temporary preview link, posted as a comment on the PR ([workflow](.github/workflows/firebase-hosting-pull-request.yml)).

To deploy manually instead:

```bash
npm run build
firebase deploy --only hosting
```

## Credits

- Weather data from [WeatherAPI.com](https://www.weatherapi.com/)
- Built by Team Soul as part of the Angular Internship 2022

## License

[MIT](LICENSE)
