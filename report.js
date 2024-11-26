const newman = require("newman");
//require('dotenv').config();

newman.run(
  {
    collection: `https://api.postman.com/collections/39820932-00002547-ae7d-4ddc-aca8-f51f8b1966a3?access_key=${process.env.access_key}`,
    //${process.env.access_key}
    //collection:require('./collection/collection.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    //environment: './env.json',
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
