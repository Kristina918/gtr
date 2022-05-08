const breadcrumbsLi = document.querySelectorAll(".header-nav__breadcrumbs-box-li");
const firstLiEl = breadcrumbsLi[0];
let div = `<p class="header-nav__breadcrumbs-separator">&mdash;</p>`;
const doubles = Array.prototype.map.call(breadcrumbsLi, (el) => {

    if (el !== firstLiEl) {
        el = el.insertAdjacentHTML('beforebegin', div);


    }
});
const arraybred = [...breadcrumbsLi];
let lastElem = arraybred[arraybred.length - 1];
lastElem.querySelector(".header-nav__breadcrumbs-box-a").classList.add('disabled');