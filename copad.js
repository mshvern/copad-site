document.addEventListener('DOMContentLoaded', function () {
    let navs = document.querySelectorAll('.sidenav');
    let navInstances = M.Sidenav.init(navs);
    let tabs = document.querySelectorAll('.tabs');
    let tabInstances = M.Tabs.init(tabs, {});
});