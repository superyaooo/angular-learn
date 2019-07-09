# Learn Angular bit by bit.

**Useful tools**
* webpack bundle analyzer 
 1. `npm install webpack-bundle-analyzer --save-dev`
 2. `ng build --stats-json` to add stats.json in build
 3. `npx webpack-bundle-analyzer dist/angular-build-serving/stats.json`

* `ng build --aot` to optimize the build

* `ng b --prod` to build prod environment, optimizes the build for prod

* `ng serve --port 8626` to specify port to run

* `ng test --code-coverage` to calculate and report test code coverage; report generated in /coverage folder by default 

