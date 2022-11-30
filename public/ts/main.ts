
interface Route {
    path: string;
    component: any;
}

const historyPath = '/demo-router';

let routes: Route[] = [
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

function pageHome(){
    appView.innerHTML = `<div> Home </div>`;
}

function pageAbout(){
    appView.innerHTML = `<div> About </div>`;
}

function pageNotFound(){
    appView.innerHTML = `<div> Not Found </div>`;
}

function router(_routes: Route[]){
    let currentPath: string = window.location.pathname
    currentPath = currentPath.replace(historyPath,'')
    const currentRoute: Route[] = _routes.filter(i => currentPath === i.path)
    if(currentRoute[0])
        return currentRoute[0].component();
    else return _routes.filter(i => '/*' === i.path)[0].component();
}

window.addEventListener('load', router(routes));
