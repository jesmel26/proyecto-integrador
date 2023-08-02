console.warn('🆗: Módulo PageAboutUs cargado.');

class PageAboutUs {

    static async init () {
        console.log('PageAboutUs.init()');

        function accordion() {
            const accordionTitles = document.querySelectorAll('.accordion-title');
            const accordionContents = document.querySelectorAll('.accordion-content--hidden');
            const iconOpenCloseBoxes = document.querySelectorAll('.icon-open_box');
            const iconOpenCloseSpans = document.querySelectorAll('.icon-open');
        
            function accordionToggle(contentElements, classOriginal, classNew) {
                contentElements.forEach((contentElement, index) => {
                accordionTitles[index].addEventListener('click', function() {
                    contentElement.classList.toggle(classOriginal);
                    contentElement.classList.toggle(classNew);
                    this.classList.toggle('accordion-title--open');
                    });
                });
            }
        
            accordionToggle(accordionContents, 'accordion-content--open', 'accordion-content--hidden');
            accordionToggle(iconOpenCloseSpans, 'icon-open', 'icon-close');
            accordionToggle(iconOpenCloseBoxes, 'icon-open_box', 'icon-close_box');
        }
        accordion()
    }
}

export default PageAboutUs;