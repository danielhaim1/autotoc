class TableUtils {
	constructor (tableSelector) {
		this.tables = document.querySelectorAll(tableSelector);
		this.tables.forEach((table) => this.initializeTable(table));
	}

	initializeTable(table) {
		this.setupAccessibility(table);
		this.setupSorting(table);
		this.setupKeyboardNavigation(table);
	}

	setupAccessibility(table) {
		this.addAriaRoles(table);
		this.addAriaAttributes(table);
		this.addAriaLabels(table);
	}

	addAriaRoles(table) {
		table
			.querySelectorAll("tr")
			.forEach((row) => row.setAttribute("role", "row"));
		table
			.querySelectorAll("th")
			.forEach((th) => th.setAttribute("role", "columnheader"));
		table
			.querySelectorAll("tbody tr th")
			.forEach((th) => th.setAttribute("role", "rowheader"));
		table.querySelectorAll("td").forEach((td) => td.setAttribute("role", "cell"));
	}
	addAriaAttributes(table) {
		const allHeaders = table.querySelectorAll("th");
		allHeaders.forEach((header, index) => {
			header.setAttribute("aria-colindex", index + 1);
		});
		const colCount = allHeaders.length;
		table.setAttribute("aria-colcount", colCount);
	}
	addAriaLabels(table) {
		if (table.classList.contains("table-responsive")) {
			const headers = Array.from(table.querySelectorAll("thead th")).map(
				(th) => th.textContent
			);

			table.querySelectorAll("tbody tr").forEach((row) => {
				Array.from(row.cells).forEach((cell, index) => {
					cell.setAttribute("data-label", headers[index]);
				});
			});

			if (table.tFoot && table.tFoot.rows.length > 0) {
				const footerRows = table.tFoot.rows;
				Array.from(footerRows).forEach((row) => {
					if (row.cells.length >= 2) {
						row.cells[1].setAttribute("data-label", headers[1]);
					}
				});
			}
		}
	}

	setupSorting(table) {
		const allHeaders = table.querySelectorAll("th");
		allHeaders.forEach((th, index) => {
			if (th.hasAttribute("aria-sort")) {
				this.makeHeaderSortable(th, index, table); // Pass the actual index
			}
		});
	}

	sortTable(table, columnIndex) {
		const allHeaders = table.querySelectorAll("th");
		const currentHeader = allHeaders[columnIndex];

		if (!currentHeader.hasAttribute("aria-sort")) {
			// Exit if the clicked header is not sortable
			return;
		}

		// Determine the current and new sort directions
		let currentSortDirection = currentHeader.getAttribute("aria-sort");
		let newSortDirection =
			currentSortDirection === "ascending" || currentSortDirection === null
				? "descending"
				: "ascending";

		currentHeader.setAttribute("aria-sort", newSortDirection);

		// Perform the sorting
		const isNumericSort =
			currentHeader.getAttribute("data-sort-type") === "numeric";
		this.performSorting(table, columnIndex, newSortDirection, isNumericSort);

		// Update the sorted rows
		const rows = Array.from(table.tBodies[0].rows);
		rows.sort((a, b) => {
			let x = a.cells[columnIndex].textContent.trim();
			let y = b.cells[columnIndex].textContent.trim();
			return newSortDirection === "ascending"
				? x.localeCompare(y)
				: y.localeCompare(x);
		});
		rows.forEach((row) => table.tBodies[0].appendChild(row));

		// Maintain the footer
		if (table.tFoot) {
			table.appendChild(table.tFoot);
		}

		// Update the sort icon
		const icon = currentHeader.querySelector("i");
		if (icon) {
			icon.className =
				newSortDirection === "ascending" ? "icon-sort-up" : "icon-sort-down";
		}
	}
	makeHeaderSortable(th, columnIndex, table) {
		th.innerHTML = `<button>${th.innerHTML} <i class="icon-sort" aria-hidden="true"><svg><use xlink:href="#icon-sort"></use></svg></i></button>`;
		th
			.querySelector("button")
			.addEventListener("click", () => this.sortTable(table, columnIndex));
	}

	performSorting(table, columnIndex, sortDirection, isNumeric) {
		console.log(
			"Sorting Column: " +
			columnIndex +
			", Sort Direction: " +
			sortDirection +
			", Is Numeric: " +
			isNumeric
		);

		let rows = Array.from(table.tBodies[0].rows);

		rows.sort((a, b) => {
			let x = a.cells[columnIndex].textContent.trim();
			let y = b.cells[columnIndex].textContent.trim();

			if (isNumeric) {
				x = this.parseCurrency(x);
				y = this.parseCurrency(y);
			} else {
				return sortDirection === "ascending"
					? x.localeCompare(y)
					: y.localeCompare(x);
			}

			let comparison = sortDirection === "ascending" ? x - y : y - x;
			console.log(`Comparing: ${x} and ${y}, Result: ${comparison}`);
			return comparison;
		});

		console.log(
			"Current Rows in DOM Before Clearing: ",
			Array.from(table.tBodies[0].rows).map((row) =>
				row.cells[columnIndex].textContent.trim()
			)
		);

		// Clear existing rows in tbody
		while (table.tBodies[0].firstChild) {
			table.tBodies[0].removeChild(table.tBodies[0].firstChild);
		}
		console.log(
			"Sorted Rows: ",
			rows.map((row) => row.cells[columnIndex].textContent.trim())
		);

		// Append sorted rows back to the tbody
		rows.forEach((row) => table.tBodies[0].appendChild(row));

		// Log the new order in DOM after appending
		console.log(
			"New Rows in DOM After Appending: ",
			Array.from(table.tBodies[0].rows).map((row) =>
				row.cells[columnIndex].textContent.trim()
			)
		);
	}

	parseCurrency(value) {
		const numberString = value.replace(/[\$,€£]/g, "").replace(/,/g, "");
		const number = parseFloat(numberString) || 0;
		console.log(`Parsing: ${value}, Result: ${number}`);
		return number;
	}

	setupKeyboardNavigation(table) {
		table.querySelectorAll("td, th[aria-sort]").forEach((cell) => {
			cell.setAttribute("tabindex", "0");
			cell.addEventListener("keydown", (event) =>
				this.handleKeydown(event, table)
			);
		});
	}

	handleKeydown(event, table) {
		const key = event.key;
		const currentCell = event.target;

		if (currentCell.tagName === "TH" && currentCell.querySelector("button")) {
			if (key === "Enter" || key === " ") {
				const button = currentCell.querySelector("button");
				button.focus();
				if (key === "Enter") {
					button.click();
				}
				event.preventDefault();
				return;
			}
		}

		let row = currentCell.parentNode;
		let currentRowIndex = row.rowIndex;
		let currentCellIndex = currentCell.cellIndex;

		switch (key) {
			case "ArrowRight":
				this.moveFocus(table, currentRowIndex, currentCellIndex + 1);
				break;
			case "ArrowLeft":
				this.moveFocus(table, currentRowIndex, currentCellIndex - 1);
				break;
			case "ArrowDown":
				this.moveFocus(table, currentRowIndex + 1, currentCellIndex);
				break;
			case "ArrowUp":
				this.moveFocus(table, currentRowIndex - 1, currentCellIndex);
				break;
			case "PageDown":
				this.moveFocus(
					table,
					Math.min(currentRowIndex + 5, table.rows.length - 1),
					currentCellIndex
				);
				break;
			case "PageUp":
				this.moveFocus(table, Math.max(currentRowIndex - 5, 0), currentCellIndex);
				break;
		}
	}
	moveFocus(table, rowIndex, cellIndex) {
		const row = table.rows[rowIndex];
		if (row) {
			const cell = row.cells[cellIndex];
			if (cell) {
				cell.focus();
			}
		}
	}
}

new TableUtils("table");




function wrapCollapsibleContent() {
	const h2Elements = document.querySelectorAll(".container h2:not(.ignore)");

	h2Elements.forEach((h2) => {
		// Make h2 focusable
		h2.setAttribute("tabindex", "0");

		// Add a toggle arrow
		const arrow = document.createElement("span");
		arrow.innerHTML = "▼"; // or use an icon/font
		arrow.className = "toggle-arrow";
		h2.appendChild(arrow);

		// ARIA attributes for accessibility
		h2.setAttribute("aria-expanded", "false");
		h2.setAttribute("role", "button");

		// Create a wrapper div for collapsible content
		const wrapper = document.createElement("div");
		wrapper.className = "collapsible-content";
		wrapper.setAttribute("aria-hidden", "true");

		let element = h2.nextElementSibling;
		while (element && element.tagName !== "H2") {
			const next = element.nextElementSibling;
			wrapper.appendChild(element);
			element = next;
		}

		h2.parentNode.insertBefore(wrapper, h2.nextSibling);

		// Event listener for toggling visibility
		h2.addEventListener("click", () => {
			const expanded = h2.getAttribute("aria-expanded") === "true" || false;
			h2.setAttribute("aria-expanded", !expanded);
			wrapper.setAttribute("aria-hidden", expanded);
			wrapper.style.display = expanded ? "none" : "block"; // Toggle display
			arrow.innerHTML = expanded ? "▼" : "▲"; // Change arrow direction
		});

		h2.addEventListener("keypress", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				h2.click();
			}
		});
	});
}

document.addEventListener("DOMContentLoaded", wrapCollapsibleContent);

