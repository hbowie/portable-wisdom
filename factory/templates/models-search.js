<?output "../../web/js/search-models.js"?>
let searchModels = [
<?nextrec?>
	{
		title: "=$title$=",
		date: "=$date$=",
    url: "models/=$title&f$=.html",
    summary: "=$body&so\$=",
		content: "=$body&p$="
	},
<?loop?>
];
