const markdown_it_container = require('markdown-it-container');

module.exports = function(e) {
    // read YAML data from 'data' folder
    e.addDataExtension("yml", contents => require("js-yaml").load(contents));

    e.addPlugin(require('eleventy-plugin-toc'));

    e.setLibrary("md",
        require("markdown-it")({
            html: true,
            breaks: true,
            linkify: true
        })
        .use(require('markdown-it-anchor'))
        .use(require('markdown-it-deflist'))
        .use(markdown_it_container, 'important')
        .use(markdown_it_container, 'astuce')
        .use(markdown_it_container, 'note')
    );

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