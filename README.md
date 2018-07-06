# Node.js examples

# Before anything!

If you are using the CS50.ide then the downloads section is unnecessary since you should have all the downloads.

# Downloads

Downloads both Node and NPM
https://www.npmjs.com/get-npm

Don’t worry! We want NPM!

Express
https://expressjs.com/en/starter/installing.html

# Getting Started

So let us enter our command line. Let us assume we are in your workspace directory in your CS50.ide. If you are not, let us cd into that directory.

```
cd ~/workspace
```

Let us create a new folder (directory). The command `mkdir` creates a folder with a folder name after the `mkdir` command.

```
mkdir node_app
```

Now let us enter the directory that we just created.

```
cd node_app
```

Now that we are inside the empty folder, let us create a file called `server.js`. This would be where we create our Node.js server.

```
touch server.js
```

`touch filename.js` creates a file for us in the directory we are currently in.
So now that we have a new file by the name of server.js we can start to fill it up with the code that we need. We can populate the file with the js file.

```javascript
var http = require("http");

// create HTTP server
var server = http.createServer();

// handler for requests
function handler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("hello world!");
  res.end();
}

// handle requests with handler
server.on("request", handler);

// listen on port 3000
server.listen(8080);
```

# Let us break down what is going on

So let us look at the file and walk through what is actually going on. So Node.js gives us a lot of things out of the box, that includes the module “http” that we ‘require”. The “http” module allows us to create an http server as you can see 2 lines below where we require the “http” module.

The function server.on() listens for the the first argument to be true and it that is true then it fires off the second argument which is the function handler() which sends the header which basically says what type of response that is being sent.
The res.write() is the string we are passing onto server. The res.end() ends our function.

# How do we run these files?

We can actually run these files from the command line by first calling node and the file.

```
node server.js
```

# How do I run the files in the folders labeled “express”

When you are inside the folder labeled express you can run their server.js file within, but first you must install your node dependencies

```
npm install
```

Then you run it by calling node and the filename with its extension.

```
node server.js
```

# Where do I go from here?

- Node.js is well documented so I recommended you to scroll to the bottom in the resources section and check out the node.js documentation. https://nodejs.org/docs/latest-v9.x/api/synopsis.html

* Express.js : is a very popular framework used with Node.js. It helps remove a lot of the heavy lifting. In this repo they are used in the folders with “express” in their name. https://expressjs.com/en/starter/hello-world.html
