/**
 * @jest-environment jsdom
 */

import AutoToc from "../dist/autotoc.amd.js";

// Setting up the HTML structure for testing
document.body.innerHTML = `
<div class="demo-container container">
  <div class="row">
    <div class="col">
      <div class="grid-demo" data-scale="minor-third">
        <nav>
          <!-- The table of contents will be appended here -->
        </nav>
        <article>
          <h1><span>Multilang Slugify</span></h1>
          <p>Slugify is an all-purpose slug generator that converts text into clean, SEO-friendly slugs. It's ideal for automating anchor IDs in headings and is designed to handle a wide range of languages and special characters.</p>
          <p>In this demo, we are auto generating a Table of Content using the heading in the document and testing the anchor text IDs</p>
          <p>Learn more at <a href="https://github.com/danielhaim1/slugify">https://github.com/danielhaim1/slugify</a></p>
          <h2><span>Supported Languages:</span></h2>
          <p> German, Danish, Dutch, Finnish, French, Hungarian, Italian, Norwegian, Portuguese, Romanian, Russian, Spanish, Swedish, Turkish, Greek, Bulgarian, Serbian, Croatian, Czech, Polish, Slovak, Slovenian, Latvian, Lithuanian, Estonian, Persian, Arabic, Hebrew, Hindi, Thai, Chinese, Japanese, Korean, Vietnamese, and Ukrainian, as well as Emoji</p>

          <h3><span>Installation</span></h3>
          <pre><code>$ npm i @danielhaim/slugify</code></pre>

          <h2><span>More Examples</span></h2>
          <h3><span>Süße Sophia, schön und klug</span></h3>
          <h3><span>Hello, World!</span></h3>
          <h3><span>hello@example.com</span></h3>

        </article>
      </div>
    </div>
  </div>
</div>
`;

test('AutoTOC', () => {
  // ...
});