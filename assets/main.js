const historyPath = '/demo-router';
let routes = [
    {
        path: '/',
        component: pageHome,
    },
    {
        path: '/about',
        component: pageAbout,
    },
    {
        path: '/*',
        component: pageNotFound,
    },
];
let appView = document.getElementById('root');
function pageHome() {
    appView.innerHTML = `<div> Home </div>`;
}
function pageAbout() {
    appView.innerHTML = `<div> About </div>`;
}
function pageNotFound() {
    appView.innerHTML = `<div> Not Found </div>`;
}
function router(_routes) {
    let currentPath = window.location.pathname;
    console.log('newCurrent:', currentPath);
    currentPath = currentPath.replace(historyPath, '');
    const currentRoute = _routes.filter(i => currentPath === i.path);
    console.log('newCurrent:', currentRoute);
    if (currentRoute[0])
        return currentRoute[0].component();
    else
        return _routes.filter(i => '/*' === i.path)[0].component();
}
window.addEventListener('load', router(routes));
