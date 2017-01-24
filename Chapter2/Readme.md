NPM:
----
It’s a package manager that comes bundled with Node.js. It looks up the packages in an online repository at https://npmjs.com for that package. It downloads them and its dependencies and installs them in the project. Install using `npm install packageName`

When you install a package, npm looks for a package.json or node_modules folder and puts the packages there. It keeps going up the directory heirarchy until it finds either of those. Thus, if you want to install node_modules in your current directory, you need either of the two:

 1. Package.json
 2. Node_modules folder.

The installed modules may have their own package.json and dependencies and thus might have their own node_modules directory.
Npm has following capabilities:

 - You can create a new package.json using npm init.
 - Npm can  automatically update the packages that you have (if you allow).  `npm install` updates all dependencies and installs missing ones.
 - It can add dependencies to your package.json as you install them using
    --save flag. `npm install express --save`
 -  ~ (tilde) : allows for revision updates as long as major and minor versions match. E.g. 3.2.1  would allow any version 3.2.x as long as x >= 2
 - ^ (caret) : allows for minor version and revision updates. Example: 3.2.1 can be upgraded to any version 3.x.y as long as x > 3 and y >= 2.
 - -g parameter while installing allows global installation of a package. It installs the package to user-specific folder and not current application directory. It will be available to any node.js application and not just the current one. `npm install -g express`
 - Uninstalling a package is easy. Just use `npm uninstall express --save` This will remove the dependency from package.json as well. For uninstalling global packages, use `npm uninstall -g express`
 - `--save-dev` saves dependencies to the devDependencies section of package.json file. Use it when you don't need a module in production but only in dev.

Setup:
In your project directory with the package.json file, run the following commands:

      npm install express --save
      npm install cookie-parser --save
      npm install expect.js --save
      npm install express-generator --save
      npm install express-session --save
      npm install mocha --save
      npm install node-inspector --save

After this, re-open your package.json file and it should look similar to Chapter2/package.json.

[Here](https://github.com/node-inspector/node-inspector) is some documentation on how to use node-inspector:
