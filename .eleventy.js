const markdown_it_container = require('markdown-it-container');

const plugin_toc = require('eleventy-plugin-toc');

module.exports = function(e) {
    // read YAML data from 'data' folder
    e.addDataExtension("yml", contents => require("js-yaml").load(contents));

    e.addPlugin(plugin_toc, {
      tags: ['h2', 'h3'],
    	ul: true
    });

    e.setLibrary("md",
        require("markdown-it")({
            html: true,
            breaks: true,
            linkify: true
        })
        .use(require('markdown-it-anchor'), {
                slugify: s => require('slugify')(s, {
                    remove: /[&*+~.'"!:@]/g,
                    lower: true
                })
            }
        )
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