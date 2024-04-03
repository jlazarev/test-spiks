// init Accordion
new Accordion('.accordion-container', {
    showMultiple: true,
    openOnInit: [0, 1, 2],
});

// checkbox handler
const checkboxes = document.querySelectorAll('.options__input');
const badgesList = document.querySelector('.badges');

const tmplBadge = document.querySelector('#tmpl-badge');
const badgeNewItem = tmplBadge.content.querySelector('.badges__item');
const badgeText = tmplBadge.content.querySelector('.badges__text');

const badge = tmplBadge.content.cloneNode(true);

function handleCheckboxChange(event) {
    const checkbox = event.target;
    const badgeId = `badges-${checkbox.id}`;
    if (checkbox.checked) {
        badgeNewItem.id = badgeId;
        badgeText.textContent = checkbox.name;

        const badge = tmplBadge.content.cloneNode(true);
        badgesList.append(badge);

        const badgesItems = badgesList.querySelectorAll('.badges__item');
        badgesItems.forEach((item) => {
            if (item.id === badgeId) {
                const closeBtn = item.querySelector('.badges__close-btn')
                closeBtn.addEventListener('click', ()=> {
                    item.remove();
                    checkbox.checked = false; 
                });
            }
        });
    } else {
        const badgesItems = badgesList.querySelectorAll('.badges__item');
        badgesItems.forEach((item) => {
            if (item.id === badgeId) {
                item.remove();
            }
        });
    }
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange)
});

// badge close btn handler
const badgesItems = badgesList.querySelectorAll('.badges__item');

badgesItems.forEach((item) => {
    const closeBtn = item.querySelector('.badges__close-btn')
    closeBtn.addEventListener('click', ()=> {
        item.remove();

        checkboxes.forEach((checkbox) => {
            if (item.id === `badges-${checkbox.id}`) {
                checkbox.checked = false;
            }
        });
    });
});

