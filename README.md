# shyp-web-take-home
Shyp's Coding Challenge

##Running code
This repository utilizes `Gulp` as its task runner.

Gulp will build a Browserified, Babel-ified, concatenated file for the index to run.

In order to keep listening for changes, just run `gulp dev` in your terminal, which will run a full build and then listen for future changes.

If you'd like to just build it once, just utilize `gulp build`.

##Technologies
I'm utilizing React and ES6 for this single-page application.

For styling, just vanilla CSS.

Font Awesome is used just for the Share Tracking form's `close` button.

##Architecture
I've broken down the application code and modularized components so they do the minimum possible.

`client/js` contains one specific file, `app.js`, which handles the logic for rending the components that make up this webapp.

In turn, there are two components, represented as folders, within this `client/js` folder: `Card` and `Header`.

`Card` contains three separate components that make up its contents:

+ `PackageInformation`, which contains the item photo and addresses
+ `ShareTracking`, consisting of the button as well as drop-down form
+ `TrackingDetails`, where information about the package's transportation status can be found.