// Needed for JSX compilation to work
require("babel-register");

const antwar = require("antwar");

const environment = process.argv[2];

// Patch Babel env to make HMR switch work
process.env.BABEL_ENV = environment;

antwar[environment]({
  environment,
  antwar: require("./antwar.config"),
  webpack: require("./webpack.config"),
})
  .then(() => console.log("Surf to http://localhost:3000"))
  .catch(err => {
    console.error(err);

    process.exit(1);
  });
