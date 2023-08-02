class Main {

    async ajax(url, method = 'get') {
        return await fetch(url, { method: method }).then(r => r.text());
    }

    getIdFromHash() {
        let id = location.hash.slice(1);
        if (id[0] === '/') {
            id = id.slice(1);
        }
        return id || 'home';
    }

    getViewUrlFromId(id) {
        return `views/${id}.html`;
    }

    getModuleUrlFromId(id) {
        return `./modules/${id}.js`;
    }

    setActiveLink(id) {
        const links = document.querySelectorAll('.main-nav__link');
        links.forEach(link => {
            if (link.getAttribute('href') === `#/${id}`) {
                link.classList.add('main-nav__link--active');
                link.ariaCurrent = 'page';
            } else {
                link.classList.remove('main-nav__link--active');
                link.removeAttribute('aria-current');
            }
        });
    }

    async initJS(id) {
        const moduleUrl = this.getModuleUrlFromId(id);
        try {
            const {default: module} = await import(moduleUrl);
            if (typeof module.init !== 'function') {
                console.error(`El módulo ${id} no posee un método init().`);
                return;
            }
            module.init();
        } catch (error) {
            console.error(`No se pudo importar el módulo ${moduleUrl}.`);
        }
    }

    async loadTemplate() {
        const id = this.getIdFromHash();
        
        const viewUrl = this.getViewUrlFromId(id);
        const viewContent = await this.ajax(viewUrl);
        document.querySelector('main').innerHTML = viewContent;

        this.setActiveLink(id);

        this.initJS(id);
    }

    async loadTemplates() {
        this.loadTemplate();
        window.addEventListener('hashchange', () => this.loadTemplate());
    }

    async start() {
        await this.loadTemplates();
        const btnCart = document.querySelector('.btn-cart-toggle');
        const cartContainer = document.querySelector('.cart-container');
        let iconXCartClose;

        iconXCartClose = document.querySelector('.icon-cart-close');

        let isCartOpen = false;

        function openCart() {
            //console.log('Mostrar el carrito');
            btnCart.classList.add('btn-pressed');
            cartContainer.classList.add('cart-container--open');
            isCartOpen = true;
        }

        function closeCart() {
            //console.log('Ocultar el carrito');
            btnCart.classList.remove('btn-pressed');
            cartContainer.classList.remove('cart-container--open');
            isCartOpen = false;
        }

        function handleEscapeKey(ev) {
            //console.log('Tecla presionada:', ev.key);
            if (ev.key === 'Escape') {
                console.log('Cerrar modal');
                closeCart();
            }
        }

        function handleOutsideClick(ev) {
            if (
                ev.target.closest('.cart-container') ||
                ev.target.classList.contains('btn-cart-toggle')
            ) {
                //console.log('hiciste click dentro del carro, continua abierto');
            } else {
                //console.log('Presionaste fuera del carrito, carrito cerrado');
                closeCart();
            }
        }

        btnCart.addEventListener('click', function (ev) {
            if (!isCartOpen) {
                openCart();
                window.addEventListener('keydown', handleEscapeKey);
                window.addEventListener('click', handleOutsideClick);
            } else {
                closeCart();
                window.removeEventListener('keydown', handleEscapeKey);
                window.removeEventListener('click', handleOutsideClick);
            }
        });

        iconXCartClose.addEventListener('click', function () {
            closeCart();
        });
    }
}

const main = new Main();
main.start();
