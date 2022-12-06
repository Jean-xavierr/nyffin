# Nyffin

This webapp is deployed on www.nyffin.com

Boilerplate from: [Vite + React + Tailwind CSS + Typescript starter](https://github.com/wobsoriano/vite-react-tailwind-starter)

## Available Scripts in `Makefile`

This app uses `Docker` and `docker-compose`, thus we use a Makefile:

- `all` (up & logs)
- `up` (start dev server)
- `exec` (exec shell in docker container)
- `build` (build for production)
- `serve` (create local server to test local build)
- `deploy` (push prod build)
- `re` (fclean & all)
- `reload` (down & all)
- `logs` (follow docker container logs)
- `stop` (stop container)
- `down` (down container)
- `ps` (print container status)
- `fclean` (remove images, dist, node_modules)

## Available Scripts in `package.json`

In the project directory, you can run:

### `yarn install`

### `yarn dev`

Runs the app in the development mode with [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement).\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve`

The `vite preview` command will boot up a local static web server (at http://localhost:8080) that serves the files from `dist`

## Update packages

## `yarn upgrade-interactive --latest`

Upgrade all selected packages

## `yarn upgrade <package-name> --latest`

Upgrade given package
