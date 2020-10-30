# [Project Setup](#tutorial_projectSetup)
## [Goal:](#tutorial_projectSetup_goal)<br>
Our new eLearning platform features a dropdown menu that lets users change the background location displayed in their browser app. Right now, it renders in a way that would make users of our App feel frustrated. :cursing_face:. In this project, you'll make the overall experience friendlier (:nerd_face:) by updating this feature.<br>

The width of the dropdown menu gets determined by the length of the place name for whichever location is currently selected. This means that all the other labels will show up just fine if 'Kiribati' is currently selected, but at the other end of the scale, when a user chooses 'Yap', the dropdown will cut off characters in every other label.<br>

### Target Outcome
![target behavior gif not found](./assets/dropdown_targetStyle.gif)

### Current State
![current behavior gif not found](./assets/dropdown_styleError.gif)

## [Tools:](#tutorial_projectSetup_tools)<br>
To fix this situation, you'll use Javascript, a programming language first developed to run in web browsers and make pages accessed on remote servers interactive at the level of users' local machines. JS has been expanded since then and gets used in lots of other ways now, and you can find out more by looking here (link to some docs) or via (some other intro to JS content to do later).<br>

For this project, the only thing you need to know about JS to get started is that it can also be used as a server-side implementation. Feel free to skip ahead if you already know what that means. While a browser-client JS engine runs in the browser and typically means interacting with a GUI, server-side runs in the background, whether off on someone else's computer or in some remote data center, or for our purposes, as a piece of software run by your local operating system, humming along and doing its thing when you need it. For developers this is a really cool and useful thing, because it means you can build and test JS software on a local 'Development Server' to get it working *before* uploading that code to a 'Production Server' somewhere else where it will be live for your users to access.<br>

But what does Server-Side JS do that makes it different? (This is another paragraph you can skip if you're confident you know the answer) In a nutshell: while client-side runs on the user's machine and handles their interactions once the app (page) has loaded, the server-side code handles the job of managing requests from all of those users who want to access the page in the first place, as they interact with remote functions like login authentication, and for serving them with more content on an as-needed basis while they navigate around the app.<br>

Netflix is a great example to understand how this works: client-side Javascript makes the site interactive in your browser, with animated transitions, handling input when you search for content, and in the background, recording information about your preferences and where you left off whenever you stop watching. Server-side JS lets Netflix and its users manage their private account information securely, and in a way that makes this example really easy to picture, by only sending a small chunk of its content at a time, ideally, just before the user wants it. That's true for video files of course, but also for library information when you're browsing around for the next thing to watch. Netflix is also a great example because it uses node.js for its server-side implementation, the same runtime environment you'll use to solve this project.<br>

### node.js <br>
Skip ahead if you already have node.js installed and know how to initiate a new package using npm.<br>

If you are using Windows, follow steps 1 & 2 of this guide to install node.js and npm (node package manager):<br>
[FOSSTechNix: How to Install Windows 10, Sept. 20 2020](https://www.fosstechnix.com/how-to-install-node-js-on-windows/)

If you are using macOS, follow the docs on the official node.js site using the homebrew package manager. If you don't have homebrew installed already, the docs will link you to its installation page. There are also links to useful information for Windows & Linux installations.<br>
[node.js: How to Install node.js](https://nodejs.dev/learn/how-to-install-nodejs)
