document.addEventListener("DOMContentLoaded", function () {
	const tocOptions = {
		contentSelector: ".autotoc-area",
		navigationContainer: "nav",
		tocTitle: "Table of Contents",
		tocIcon:
			'<i class="icon-toc"><svg><use xlink:href="#icon-toc"></use></svg></i>',
		highlightOffset: 50,
		headingDepthLimit: 4
	};

	const externalLinksTop = [
		{
			id: "external-link1",
			text: "Custom Top Link 1"
		},
		{
			id: "external-link2",
			text: "Custom Top Link 2"
		}
	];

	const externalLinksBottom = [
		{
			id: "external-link3",
			text: "Custom Bottom Link 3"
		},
		{
			id: "external-link4",
			text: "Custom Bottom Link 4"
		}
	];

	try {
		const tocGenerator = new AutoToc.Generate(...Object.values(tocOptions));

		tocGenerator.addExternalLinksToToc(externalLinksTop, "top", "level-0");
		tocGenerator.addExternalLinksToToc(externalLinksBottom, "bottom", "level-0");
		tocGenerator.initialize();
	} catch (error) {
		console.error("An error occurred:", error.message);
	}
});
