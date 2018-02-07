const path = require("path");

module.exports = () => ({
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
  output: "build",
  layout: () => require("./pages/components/SiteBody").default,
  paths: {
    "/": () => {
      const page = require("./pages/index").default;

      page.description = "Learn React in Vienna.";
      page.title = "Learn React in Vienna";

      return page;
    },
  },
});
