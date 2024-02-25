console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}


let pages = {
	"": "Home",
	"projects/": "Projects",
    "contact/": "Contact",
    "resumeCV/": "Resume/CV",
	"https://github.com/aaronwubshet/": "GitHub"
};

let nav = document.createElement("nav");
document.body.prepend(nav);
const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let url in pages) {
	let title = pages[url];
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
	let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }
    else if (a.host != location.host) {
        a.target = "_blank";
    }
};

