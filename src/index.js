import modulator from '@danielhaim/modulator';
import { slugify } from '@danielhaim/slugify/src/index.js';

// Constructor for `AutoToc.Generate` class.
// @param {string} contentSelector - CSS selector for the content element.
// @param {string} navigationContainer - CSS selector for the navigation container.
// @param {string} tocTitle - Title for the Table of Contents.
// @param {string} tocIcon - Icon HTML for the Table of Contents.
// @param {number} highlightOffset - Offset for highlighting active sections.
// @param {number} headingDepthLimit - Limit for heading depth to include in TOC.

export class Generate {
    constructor (
        contentSelector,
        navigationContainer,
        tocTitle,
        tocIcon,
        highlightOffset,
        headingDepthLimit
    ) {
        this.contentSelector = contentSelector;
        this.navigationContainer = navigationContainer;
        this.tocTitle = tocTitle;
        this.tocIcon = tocIcon;
        this.highlightOffset = highlightOffset;
        this.headingDepthLimit = headingDepthLimit;
        this.tocMap = new Map();
        this.tocTopMap = new Map();
        this.tocBottomMap = new Map();
        this.pendingExternalLinks = [];
    }

    // Validate the parameters passed to the constructor.
    // Throws an error if any parameter is invalid.
    validateParameters() {
        if (
            typeof this.contentSelector !== "string" ||
            !document.querySelector(this.contentSelector)
        )
            throw new Error(
                "Invalid contentSelector: Must be a valid CSS selector string for an existing element."
            );
        if (
            typeof this.navigationContainer !== "string" ||
            !document.querySelector(this.navigationContainer)
        )
            throw new Error(
                "Invalid navigationContainer: Must be a valid CSS selector string for an existing element."
            );
        if (typeof this.tocTitle !== "string")
            throw new Error("Invalid tocTitle: Must be a string.");
        if (
            this.tocIcon !== null &&
            typeof this.tocIcon !== "string" &&
            typeof this.tocIcon !== "undefined"
        )
            throw new Error("Invalid tocIcon: Must be a string or null.");
        if (typeof this.highlightOffset !== "number" || this.highlightOffset < 0)
            throw new Error("Invalid highlightOffset: Must be a non-negative number.");
        if (
            typeof this.headingDepthLimit !== "number" ||
            this.headingDepthLimit < 1 ||
            this.headingDepthLimit > 6 ||
            !Number.isInteger(this.headingDepthLimit)
        )
            throw new Error(
                "Invalid headingDepthLimit: Must be an integer between 1 and 6."
            );
    }

    // Detach scroll event listeners.
    detachEventListeners() {
        window.removeEventListener("scroll", this.boundScrollListener);
    }

    // Generate a unique ID for a heading element.
    // @param {HTMLElement} node - Heading element.
    // @returns {string} - Unique ID.
    generateUniqueId(node) {
        const slugifier = new slugify();
        return slugifier.generate(node.textContent || "");
    }

    // Populate the TOC map with headings from the content.
    populateTocMap() {
        const headings = document.querySelectorAll(`${this.createHeadingSelector()}`);

        const newTocMap = new Map();

        headings.forEach((heading) => {
            const headingLevel = parseInt(heading.tagName.substring(1), 10); // Ensure correct parsing
            const headingId = heading.id || this.generateUniqueId(heading); // Generate ID if missing
            const headingText = heading.textContent.trim();

            // Only add to the new map if it doesn't exist in the old map
            if (!this.tocMap.has(headingId)) {
                newTocMap.set(headingId, { level: headingLevel, text: headingText });
            }
        });

        // Update the existing TOC map with the new entries
        this.tocMap = new Map([...this.tocMap, ...newTocMap]);

        // Call renderTocHtml to update the TOC with the new entries in a batch operation
        this.renderTocHtml();
    }

    // Create a TOC list from the provided TOC map.
    // @param {Map} tocMap - TOC map to create the list from.
    // @returns {HTMLElement} - TOC list element.
    createTocList(tocMap) {
        const tocList = document.createElement("ol");
        if (tocMap.size === 0) return tocList;

        tocMap.forEach((info, id) => {
            const { level, text } = info;
            const cleanText = text.replace(/^#/, "");

            const listItem = document.createElement("li");
            listItem.className = `toc-list--item level-${level}`;
            listItem.setAttribute("role", "listitem");

            const anchor = document.createElement("a");
            anchor.href = `#${id}`;
            anchor.textContent = cleanText;

            listItem.appendChild(anchor);
            tocList.appendChild(listItem);
        });

        return tocList;
    }

    findFirstHeadingLevel() {
        for (let i = 1; i <= this.headingDepthLimit; i++) {
            // Use document.querySelector to search for headings within the content selector
            if (document.querySelector(`${this.contentSelector} h${i}`)) {
                return i;
            }
        }
        return null; // Return null if no headings are found within the limit
    }

    // Render the Table of Contents HTML.
    renderTocHtml() {
        let firstHeadingLevel = this.findFirstHeadingLevel();
        let currentLevel = firstHeadingLevel || 1;

        const tocList = document.createElement("ol");
        tocList.className = "toc-list";
        tocList.setAttribute("role", "list");

        let currentLists = [tocList];

        // Create the top and bottom TOC lists
        const topTocList = this.createTocList(this.tocTopMap);
        const bottomTocList = this.createTocList(this.tocBottomMap);

        // Add pending external links to the TOC
        this.pendingExternalLinks.forEach((link) => {
            const listItem = document.createElement("li");
            listItem.className = `toc-list--item level-level-0`; // Set the level as needed
            listItem.setAttribute("role", "listitem");

            const anchor = document.createElement("a");
            anchor.href = `#${link.id}`;
            anchor.textContent = link.text;

            listItem.appendChild(anchor);
            currentLists[currentLists.length - 1].appendChild(listItem);
        });

        const safeAppendChild = (parent, child) => {
            if (parent != null) {
                parent.appendChild(child);
            } else {
                console.error("Attempted to append to a non-existent element.");
            }
        };

        this.tocMap.forEach((info, id) => {
            const { level, text } = info;

            const levelDifference = level - currentLevel;

            if (levelDifference > 0) {
                for (let i = 0; i < levelDifference; i++) {
                    const subList = document.createElement("ol");
                    currentLists[currentLists.length - 1].lastElementChild.appendChild(
                        subList
                    );
                    currentLists.push(subList);
                }
            } else if (levelDifference < 0) {
                for (let i = 0; i < -levelDifference; i++) {
                    currentLists.pop();
                }
            }

            const cleanText = text.replace(/^#/, "");

            const listItem = document.createElement("li");
            listItem.className = `toc-list--item level-${level}`;
            listItem.setAttribute("role", "listitem");

            const anchor = document.createElement("a");
            anchor.href = `#${id}`;
            anchor.textContent = cleanText;

            listItem.appendChild(anchor);
            currentLists[currentLists.length - 1].appendChild(listItem);

            currentLevel = level;
        });

        const navContainer = document.querySelector(this.navigationContainer);

        if (navContainer) {
            navContainer.innerHTML = `<header><h2>${this.tocIcon}<span>${this.tocTitle}</span></h2></header>`;
            safeAppendChild(navContainer, topTocList); // Using the safe append function
            safeAppendChild(navContainer, tocList); // Using the safe append function
            safeAppendChild(navContainer, bottomTocList); // Using the safe append function
            navContainer.setAttribute("role", "doc-toc");

            navContainer.addEventListener("click", (e) => {
                if (e.target.tagName === "A" && e.target.getAttribute("href")) {
                    e.preventDefault();
                    const targetId = e.target.getAttribute("href").substring(1);
                    this.scrollToElement(targetId);
                }
            });
        } else {
            console.error("Navigation container not found");
        }
    }

    // Attach anchors to headings in the content.
    attachAnchorsToHeadings() {
        const headings = document.querySelectorAll(`${this.createHeadingSelector()}`);
        headings.forEach((heading) => {
            // Before proceeding, ensure the heading is not a child of the navigationContainer.
            if (!this.navigationContainer.includes(heading.parentNode)) {
                const uniqueId = this.generateUniqueId(heading);
                heading.id = uniqueId;

                const anchor = document.createElement("a");
                anchor.href = `#${uniqueId}`;
                anchor.textContent = "#";
                heading.insertBefore(anchor, heading.firstChild);
            }
        });
    }

    // Create a CSS selector for heading elements.
    // @returns {string} - Heading selector.
    createHeadingSelector() {
        // Construct an array of heading selectors prefixed with the contentSelector.
        return Array.from(
            { length: this.headingDepthLimit },
            (_, i) => `${this.contentSelector} h${i + 1}`
        ).join(", ");
    }

    // Scroll to a specific element with a given target ID.
    // @param {string} targetId - ID of the target element to scroll to.
    scrollToElement(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = this.highlightOffset;
            const scrollToY =
                targetElement.offsetTop -
                window.innerHeight / 2 +
                targetElement.clientHeight / 2;
            window.scrollTo({
                top: scrollToY,
                behavior: "smooth"
            });
        }
    }

    // Highlight the active section in the Table of Contents.
    highlightActiveSection() {
        const offset = this.highlightOffset;
        const headingSelectors = this.createHeadingSelector();
        const headings = document.querySelectorAll(headingSelectors);

        headings.forEach((heading, index) => {
            const anchorId = heading.getAttribute("id");
            const anchorElement = document.querySelector(
                `${this.navigationContainer} .toc-list--item a[href="#${anchorId}"]`
            );
            const nextHeading = headings[index + 1];
            const startHighlight = window.pageYOffset >= heading.offsetTop - offset;
            const stopHighlight = nextHeading
                ? window.pageYOffset >= nextHeading.offsetTop - offset
                : false;

            if (anchorElement) {
                if (startHighlight && !stopHighlight) {
                    anchorElement.classList.add("active");
                } else {
                    anchorElement.classList.remove("active");
                }
            }
        });
    }

    // Add content to the Table of Contents.
    // @param {number} level - Heading level.
    // @param {string} id - ID of the heading.
    // @param {string} text - Text content of the heading.
    addContentToToc(level, id, text) {
        if (!this.tocMap.has(id)) {
            this.tocMap.set(id, { level, text });
            this.renderTocHtml();
        }
    }

    // Add external links to the Table of Contents.
    // @param {Array} links - Array of link objects with 'id' and 'text' properties.
    // @param {string} position - Position to add links ('top' or 'bottom').
    // @param {string} specialLevel - Special level for added links.
    addExternalLinksToToc(links, position = "bottom", specialLevel = "level-0") {
        if (!Array.isArray(links)) {
            throw new Error("Invalid links: Must be an array of link objects.");
        }

        if (position === "top") {
            links.forEach((link) => {
                if (typeof link !== "object" || !link.id || !link.text) {
                    throw new Error(
                        "Invalid link format: Each link object must have 'id' and 'text' properties."
                    );
                }

                // Check if the link ID already exists in the TOC top map
                if (!this.tocTopMap.has(link.id)) {
                    this.tocTopMap.set(link.id, { level: specialLevel, text: link.text });
                }
            });
        } else {
            links.forEach((link) => {
                if (typeof link !== "object" || !link.id || !link.text) {
                    throw new Error(
                        "Invalid link format: Each link object must have 'id' and 'text' properties."
                    );
                }

                // Check if the link ID already exists in the TOC bottom map
                if (!this.tocBottomMap.has(link.id)) {
                    this.tocBottomMap.set(link.id, { level: specialLevel, text: link.text });
                }
            });
        }

        // Update the TOC HTML to include the new links
        this.renderTocHtml();
    }

    // Initialize scroll highlighting for active sections.
    initializeScrollHighlighting() {
        this.boundHighlightActiveSection = this.highlightActiveSection.bind(this);
        // const debouncedHighlight = modulate(this.boundHighlightActiveSection, 200);
        const debouncedHighlight = this.boundHighlightActiveSection;

        window.addEventListener("scroll", debouncedHighlight);
    }

    // ...
    removeEmptyLists() {
        const container = document.querySelector(this.navigationContainer); 
        if (container) {
            const lists = container.querySelectorAll('ol');
            lists.forEach(list => {
                if (list.children.length === 0) {
                    list.parentNode.removeChild(list);
                }
            });
        }
    }

    // Initialize the Table of Contents generator.
    // Validates parameters, attaches anchors, populates TOC map, renders TOC, and initializes scroll highlighting.
    initialize() {
        this.validateParameters();
        this.attachAnchorsToHeadings();
        this.populateTocMap();
        this.renderTocHtml();
        this.initializeScrollHighlighting();
        this.removeEmptyLists();
    }
}