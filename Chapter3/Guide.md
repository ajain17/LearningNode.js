**Express.js**
----------

It is built on top of Node.js. You can use any templating engines and CSS pre-processors. We are going to use [ejs](http://www.embeddedjs.com/) here.
The templating engines allows us to use static template files and at runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.

**Create the project**

We will use express-generator to scaffold a new express application. You can install it globally since you don’t need to deploy this as part of your package.json.
First, install all the packages mentioned in the package.json.

    npm install

To scaffold an express project, run `express myProject --view=ejs`
Express uses Jade as the templating engine by default. By using the --view parameter, we are explicitly specifying that we want to use ejs.
This further creates a package.json file inside your myProject so you need to run
 `cd myProject && npm install`

If you notice the package.json file just created inside myProject, you'll see it has

    "start": "node ./bin/www"
The ./bin/www file has all the boilerplate for creating and running an http server. This is the benefit of scaffolding.

Now, let's understand the project structure.

 1. utilities : this has our tracker.js code which is exported as the module.
 2. routes : this contains mapping for each route and the logic to be executed when a route is requested.
 3. views : the route mappings in routes directory renders a view after processing the request. They may pass objects to the views which are plugged in the template using `<%= myVariable %>`. The html/template to be rendered is stored in the views directory.

Now comes the most important part, how does express handles requests?

Let me introduce you to **Request Processing Middleware.**

We are using app.use(.....) to add middleware to our application. The order here is important. For each request, express.js invoked these middleware functions in order. Each function can do two things:

 1. Process the request and send back the response and end the processing of this request.
 2. (Do some processing - optional and ) Delegate the handling of the request to another middleware by calling next().

The error handling middleware is invoked when next(..anything..) is called with a parameter. `next(new Error('Page not found'));` The error handling function can again do any of the above mentioned two things - send response or delegate.

Take a look at the code to see how we have used all of these components in our application. To run the project, just use `npm start`.
