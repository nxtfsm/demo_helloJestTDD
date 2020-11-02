# [Project Setup](#tutorial_projectSetup)
## [Goal:](#tutorial_projectSetup_goal)<br>
Our new eLearning platform features a dropdown menu that lets users change the background location displayed in their browser app. Right now, it renders in a way that would make users of our App feel frustrated. :cursing_face:. In this project, you'll make the overall experience friendlier (:nerd_face:) by updating this feature.<br>

The width of the dropdown menu gets determined by the length of the place name for whichever location is currently selected. This means that all the other labels will show up just fine if 'Kiribati' is currently selected, but at the other end of the scale, when a user chooses 'Yap', the dropdown will cut off characters in every other label.<br>

### Target Outcome
![target behavior gif not found](./assets/dropdown_targetStyle.gif)

### Current State
![current behavior gif not found](./assets/dropdown_styleError.gif)

## [Tools](#tutorial_projectSetup_tools)<br>
To fix this situation, you'll use JavaScript, a programming language first developed to run in web browsers and make pages accessed on remote servers interactive at the level of users' local machines. JS has been expanded since then and gets used in lots of other ways now, and you can find out more by looking here (link to some docs) or via (some other intro to JS content to do later).<br>

For this project, the only thing you need to know about JS to get started is that it can also be used as a server-side implementation. Feel free to skip ahead if you already know what that means. While a browser-client JS engine runs in the browser and typically means interacting with a GUI, server-side runs in the background, whether off on someone else's computer or in some remote data center, or for our purposes, as a piece of software run by your local operating system, humming along and doing its thing when you need it. For developers this is a really cool and useful thing, because it means you can build and test JS software on a local 'Development Server' to get it working *before* uploading that code to a 'Production Server' somewhere else where it will be live for your users to access.<br>

But what does Server-Side JS do that makes it different? (This is another paragraph you can skip if you're confident you know the answer) In a nutshell: while client-side runs on the user's machine and handles their interactions once the app (page) has loaded, the server-side code handles the job of managing requests from all of those users who want to access the page in the first place, as they interact with remote functions like login authentication, and for serving them with more content on an as-needed basis while they navigate around the app.<br>

Netflix is a great example to understand how this works: client-side JavaScript makes the site interactive in your browser, with animated transitions, handling input when you search for content, and in the background, recording information about your preferences and where you left off whenever you stop watching. Server-side JS lets Netflix and its users manage their private account information securely, and in a way that makes this example really easy to picture, by only sending a small chunk of its content at a time, ideally, just before the user wants it. That's true for video files of course, but also for library information when you're browsing around for the next thing to watch. Netflix is also a great example because it uses node.js for its server-side implementation, the same runtime environment you'll use to solve this project.<br>

### [node.js](#tutorial_projectSetup_tools_node)<br>
Skip ahead if you already have node.js installed and know how to initiate a new package using npm.<br>

If you are using Windows, follow steps 1 & 2 of this guide to install node.js and npm (node package manager):<br>
[FOSSTechNix: How to Install Windows 10, Sept. 20 2020](https://www.fosstechnix.com/how-to-install-node-js-on-windows/)

If you are using macOS, follow the docs on the official node.js site using the homebrew package manager. If you don't have homebrew installed already, the docs will link you to its installation page. There are also links to useful information for Windows & Linux installations.<br>
[node.js: How to Install node.js](https://nodejs.dev/learn/how-to-install-nodejs)

### [Jest](#tutorial_projectSetup_tools_jest)<br>

For the heart of this project, Automated Testing and Test Driven Development, we'll work with Jest, a major JavaScript Testing Framework that you can learn more about as you go along or after finishing via the official [Jest](https://jestjs.io) website.<br>

To get started, all you need to understand is that we will install Jest as a 'package' into our application. 'Package' simply means a reusable piece of software that we can download, incorporate, and use when building out other applications. If that is something you already understand, then feel free to skip ahead to the last portion of this section, where you will use the command line to [Intialize Project Directory](#initalize-project-directory).<br>

For a quick example, imagine that you're going to make your own version of Angry Birds. For the game interactions to feel enjoyable, you'll have to make the physics calculations for shooting birds in an arc and calculating collisions match up with how objects move in the real world. But remembering the programmer's virtue of laziness, you figure that someone else has probably already done that work (and done it more expertly!). Instead of getting sidetracked from building out the other elements of your game by solving the problems involved in writing functions like:

```javascript
function calculateTrajectory(ofAngle, withForce) {
  // do some math using 'ofAngle' and 'withForce' parameters
};

calculateTrajectory(30, 90)
```
```javascript
function calculateCollision(objectA, objectB) {
  // do some math using 'objectA' and 'objectB' parameters
}

calculateCollision(bird, block)
```

By using a package manager, like npm, you can find a Javascript physics calculator already written (for the example, lets pretend it's called SweetPhysicsEngine), and import these functions from there. This can be done a few different ways, but one implemented by node.js that you'll use in this project gets implemented like this:<br>

```javascript
const { calculateTrajectory, calculateCollision } = require('SweetPhysicsEngine')
```

In plain human terms, all that line of code is doing is saying "use the function named 'require' to look in a module named with the string 'SweetPhyicsEngine' and get the attributes it exports as 'calculateTrajectory ' and 'calculateCollision' so that I can use them here." Now you can use these two functions exactly as if you'd defined them yourself: <br>

```javascript
calculateTrajectory(30, 90)
calculateCollision(bird, block)
```

If that still seems a little confusing, that's ok; just keep going ahead, and it will get clearer as you write code implementing this structure yourself. Whenever you're interested in learning more about Packages and how they're used, this blog post on freecodecamp.org is a good place to start: ['An introduction to how JavaScript package managers work'](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/). For now, go ahead and move on to the final portion of this section, using the command line to create our project's directory structure and initial files.<br>

## <a name="initalize-project-directory">Initialize Project Directory</a><br>

By now, you probably have some personal preference about where you keep various coding projects. It is important to keep refining this over time, because good file organization is one of the best ways to make your life easier and your code better as you grow as a developer. For example, keeping everything at the top level of your home directory (~) would quickly lead to total confusion; on the other hand, keeping your work on JS tutorials in either:<br>

```bash
~/codingProjects/javascript/tutorials
```
```bash
~/codingProjects/tutorials/javascript
```
or even:<br>

```bash
~/codeTutorials/javascript
```

All are good enough options, and if you have some variation on this setup already, use your command line (CLI) to navigate there. If not, use your command line to create the following directories (first, making sure that you are at the top level 'home directory'):<br>

```bash
cd ~
mkdir codeTutorials
mkdir codeTutorials/javascript
cd codeTutorials/javascript
```

Now we're all on the same page. Within this directory for storing javascript tutorials, create the directory for our current project and navigate into it (remember that once the directory exists, you can use 'tab' to autocomplete, saving keystrokes and avoiding typos):<br>

```bash
mkdir tddIntro_dropdownLabelPadder
cd tddIntro_dropdownLabelPadder
```

Now we're going to use npm to create our project as a package that can be run by node.js, using the following command (the '-y' flag tells the npm init function that we just want to use/accept all the default options when it creates our project package):<br>

```bash
npm init -y
```

This should return the following output, letting you know the initializer ran successfully, displaying the contents written into a new 'package.json' file:<br>

```bash
Wrote to [your prefix directories of]/tddIntro_dropdownLabelPadder/package.json:

{
  "name": "tddIntro_dropdownLabelPadder",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

('json' stands for 'JavaScript Object Notation', and is simply a commonly implemented formatting of data structures in a syntax familiar to JavaScript that is implemented and translatable by most major programming languages -- i.e. it allows programs written in JavaScript and Python to interact cleanly. For more information on how this works and what it allows, take a look at this 11 minute intro on YouTube when you feel curious: [JSON Crash Course](https://www.youtube.com/watch?v=GpOO5iKzOmY))<br>

You can also see all of the files created by 'npm init' and currently in your project directory by running the 'list' command, and expecting the following output:<br>

```bash
ls
package.json
```

Just one file for now. Let's expand that. First, let's go ahead and install Jest, since this is a core component for our project. Run the following command, watch as it executes, and after it completes, run 'ls' again to see the result:

```bash
npm install --save-dev jest
```

You might see some warnings along the way, but these can be ignored for now. The '--save-dev' flag is used to tell npm that we are only using the package getting installed ('jest') as a 'development' package, and so it will not be included if later on we use npm to bundle up all of our files as something for other users (this helps keep file size down and apps running faster). Now, you should be able to run the 'list' command and see the following two files and subdirectory:

```bash
ls
node_modules package-lock.json package.json
```

The 'node_modules' directory is where all of the code for the packages we install will be kept, and should never have to be modified. The package-lock.json file will keep a record of all the packages we have installed, and it will record which of those we have installed for development use only using --save-dev. This will be a very long file, because it will also include information on all of the sub-dependencies required by whatever packages we install ourselves, and like the 'node_modules' directory, we should never have to modify the 'package-lock.json' file.<br>

You will see though that the package.json file also keeps a record of which package dependencies and devDependencies we have installed, and that they appear in a much shorter and friendlier to read file, showing the name of the package dependency and the current version installed. You can see this by running the following command to output the content of the 'package.json' file to your command line:<br>

```bash
cat package.json
{
  "name": "tddIntro_dropdownLabelPadder",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^26.6.2"
  }
}
```

By reading the Jest documentation, we learn that Jest will use a function called 'testMatch' to run tests for every file with a .test or .spec extension (i.e. myFile.test.js ), and for every .js file inside of a directory called `__tests__`. This second way seems like a good way to keep our project files organized, so go ahead and create that directory now:<br>

```bash
mkdir __tests__
```

Now, for every '.js' file we create in the root (./) app directory, we'll create a corresponding '.js' file in the `./__tests__` directory. Go ahead and implement this by using the 'touch' command to create the following two files, and use the 'ls' command to see the results:

```bash
touch main.js
touch __tests__/main.js
ls
ls __tests__
```

Finally, go ahead and open the entire package directory and subdirectories in your preferred code editor. Using Atom, you can do this from the current directory by running the following command (telling your CLI to go up one directory level, then open the entire 'tddIntro_dropdownLabelPadder' directory in Atom):

```bash
atom ../tddIntro_dropdownLabelPadder
```

Swapping over to Atom, you will need to modify the following attribute in package.json (by default, it will be at line 7):<br>

From:<br>
```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

To:<br>
```javascript
"scripts": {
  "test": "jest --coverage --passWithNoTests"
}
```

By changing the value for the 'test' attribute of the 'scripts' object in the project's package.json file, we can now run the entire testing suite for our project by executing the following function at the CLI, telling npm to execute whatever script we have configured for 'test' to reference:<br>

```bash
npm run test
```

For now, you will see Jest go through the process of running tests, but in the end, it will fail and return an error. This is ok, and the expected behavior. By passing the '--passWithNoTests' flag, we have told jest that it is ok if no tests run. But there is still a minimum amount of input it must receive, and as both our `./main.js` and `./__tests__/main.js` files are empty at this point, the tests will fail.  We will look more at the '--coverage flag later'.<br>

That's it! Your project is all setup, and ready to get into the core of writing and testing functional javascript code in the next section. Double check, before moving on, that your directory structure currently looks like:

```
tddIntro_dropdownLabelPadder
--> __tests__/
      -->main.js
--> node_modules/
--> main.js
--> package.json
--> package-lock.json
```

[**Previous: Topic Intro**](./tutorial_topicIntro.md)<br>

[**Next: Test Array, Target Array, & the Steps in Between**](./tutorial_testTargetSteps.md)
