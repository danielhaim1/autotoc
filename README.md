# AutoTOC API

[![npm version](https://img.shields.io/npm/v/@danielhaim/autotoc)](https://www.npmjs.com/package/@danielhaim/autotoc)
[![Downloads](https://img.shields.io/npm/dt/@danielhaim/autotoc.svg)](https://www.npmjs.com/package/@danielhaim/autotoc)
![GitHub](https://img.shields.io/github/license/danielhaim1/autotoc)

Overview
--------

`AutoTOC` is an NPM package for automatically generating and managing table of contents with scroll highlighting for web content

[CodePen Demo](https://codepen.io/danielhaim/pen/jOJLbrV)


API Documentation
--------------------

### Getting Started ###

To initiate, install `AutoTOC` using NPM:

```shell 
npm i @danielhaim/autotoc
```

### Module Example ###

```js
import AutoToc from "@danielhaim/autotoc";

document.addEventListener("DOMContentLoaded", function () {
    const tocOptions = {
        contentSelector: "article",
        navigationContainer: "nav",
        tocTitle: "Table of Contents",
        tocIcon: '<i class="your-icon-class"></i>',
        highlightOffset: 100,
        headingDepthLimit: 4
    };

    // Appends to Top
    const externalLinksTop = [
        { id: "external-link1", text: "Custom Top Link 1" },
        { id: "external-link2", text: "Custom Top Link 2" }
    ];

    // Appends to Bottom
    const externalLinksBottom = [
        { id: "external-link3", text: "Custom Bottom Link 3" },
        { id: "external-link4", text: "Custom Bottom Link 4" }
    ];

    try {
        const tocGenerator = new AutoToc.Generate(
            ...Object.values(tocOptions)
        );

        tocGenerator.addExternalLinksToToc(externalLinksTop, "top", "level-0");
        tocGenerator.addExternalLinksToToc(externalLinksBottom, "bottom", "level-0");
        tocGenerator.initialize();
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
});
```