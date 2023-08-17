import Home from "./views/Home.js";
import Contact from "./views/Contact.js";
import About from "./views/About.js";
import Work from "./views/Work.js";
import Tools from "./views/Tools.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/work", view: Work },
        { path: "/about", view:About},
        { path: "/tools", view:Tools},
        { path: "/contact", view: Contact }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
        if (e.target.tagName === "I" || e.target.tagName === "SPAN") {
            let anchorElement = e.target.closest("a");
            if (anchorElement && anchorElement.classList.contains("nav__link")) {
                e.preventDefault();
                navigateTo(anchorElement.getAttribute("href"));
            }
        }
    });


    router();
});