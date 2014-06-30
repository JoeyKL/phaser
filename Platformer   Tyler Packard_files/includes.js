function makeHeader() {
	var filer = new Filer();
	filer.include("/snippets/header.html", "header");
}

function makeNav(selectedId) {
	var filer = new Filer();
	var id = selectedId || document.title.match(/^(\w+)/)[1].toLowerCase();
	filer.read("/snippets/nav.html", function(text) {
		var parser = new DOMParser();
		var nav = parser.parseFromString(text, "text/html");
		if (nav.getElementById("menu-" + id)) {
			var anchor = nav.getElementById("menu-" + id);
			anchor.className = "selected";
		}
		document.getElementById("nav").innerHTML = nav.body.innerHTML;
	});
}

function makeFooter() {
	var filer = new Filer();
	filer.include("/snippets/footer.html", "footer");
}