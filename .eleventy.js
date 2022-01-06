const yml = require("js-yaml");

module.exports = function(e) {
    // read YAML data from 'data' folder
    e.addDataExtension("yml", contents => yml.load(contents));

    return {
        dir: {
            input: "./",
            output: "./build",
            includes: "includes",
            layouts: "layouts",
            data: "data"
        }
    };
};