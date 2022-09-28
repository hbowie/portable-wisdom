<?output "../../web/js/search-lists.js"?>
let searchLists = [
<?nextrec?>
	{
		title: "=$title$=",
		date: "=$date$=",
    url: "lists/=$title&f$=.html",
    summary: "=$body&so\$=",
		content: "=$body&p$="
	},
<?loop?>
];
