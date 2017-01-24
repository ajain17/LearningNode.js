**Unit Testing**
------------

We will be using [Mocha](https://www.npmjs.com/package/mocha) testing framework to describe and run the tests. Install it using `npm install mocha --save-dev` since its only needed in dev environment and we don't want to publish it to production.
We can plug in any package for writing actual assertions.
Mocha has following methods available to do setup and teardown for the tests:

> - before() - Run before any tests are run
> - after()  - Run after all tests have run
> - beforeEach() - Run before each test is run
> - afterEach() - Run after each test is run

The tests are grouped together inside of a `describe()` which in itself contains `it()` that may contain one or more assertions for our test.

ASSERT
------

Its a code module of Node.js. It doesn't need to be installed or require(d) in our program. We can simply use it as follows:

>  1. Coercive equality using operator ( == )
>   - assert.equal(actualValue, expectedValue)
>   - assert.notEqual(actualValue, expectedValue)
>  2. Strict equality using ( === )
>   - assert.strictEqual(actualValue, expectedValu
>   - assert.notStrictEqual(actualValue, expectedValue)
You can check out further documentation [here](https://nodejs.org/api/assert.html).

We will use another module called **Expect.js** (not expect, which is another node.js assertion package). Expect.js allows us to do method chaining. Example:

    expect(variable).to.be.true
Following is the syntax for expect.js assertions:

> - ok - truthiness
> - true - object is truthy
> - to.be - method chaining
> - not - negation
> - a/an - check data type
> - include - element is contained in array
> - contain - same as include
> - below/above - check value is in range

Take a look at the code in the tests to see how we are using assertions.

SUPERAGENT
----------

We need a way to test the http requests and responses as well. For instance, if we go to the homepage, do we get 200 OK or 404 not found and so on. To test http requests, we will use a package called [Superagent](https://visionmedia.github.io/superagent/).
Look at the test in index.js file to see how superagent can be used for this usecase.

**Note:** Also look at /bin/www to see how we are handling the startup of the node application from the tests.

Run the tests using `mocha tests`.