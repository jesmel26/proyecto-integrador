import productController from '/js/controllers/product.js';
console.warn('🆗: Módulo PageCreate cargado.');

class PageCreate {
    static productsTableContainer;

    static async deleteProduct(e) {
        if (!confirm('¿Estás seguro de querer eliminar el producto?')) {
            return false;
        }
        const row = e.target.closest('tr');
        const _id = row.querySelector('td[data-product-property="_id"]').innerHTML;
        const deletedProduct = await productController.deleteProduct(_id);
        alert(`El producto ${deletedProduct.name} [ID: ${deletedProduct._id}] ha sido eliminado correctamente.`);
        PageCreate.reloadTable();
        return deletedProduct;
    }

    static async addTableEvents() {
        PageCreate.productsTableContainer.addEventListener('click', async e => {
            if (e.target.classList.contains('btn-delete')) {
                const deletedProduct = await PageCreate.deleteProduct(e);
                console.log('deletedProduct:', deletedProduct);
                return;
            }
        });
    }

    static async renderTemplateTable(products) {
        const hbsFile = await fetch('templates/products-table.hbs').then(r => r.text());
        const template = Handlebars.compile(hbsFile);
        const html = template({ products });
        PageCreate.productsTableContainer.innerHTML = html;
    }

    static async loadTable() {
        document.getElementById('btn-get-all').addEventListener('click', async e => {        
        const products = await productController.getProducts();
        console.log(`Se encontraron ${products.length} productos.`);
        PageCreate.renderTemplateTable(products);
    });
    }

    static async reloadTable() {              
        const products = await productController.getProducts();
        console.log(`Se encontraron ${products.length} productos.`);
        PageCreate.renderTemplateTable(products);
    }

    static async prepareTable() {
        PageCreate.productsTableContainer = document.querySelector('.products-table-container');
        await PageCreate.loadTable();
        PageCreate.addTableEvents();
    }

    static async init () {
        console.log('PageCreate.init()');

        PageCreate.prepareTable();

        // Obtener una referencia a los elementos HTML
        const input_Id = document.getElementById('_id');
        const inputName = document.getElementById('name');
        const inputPrice = document.getElementById('price');
        const inputStock = document.getElementById('stock');
        const selectBrand = document.getElementById('brand-input');
        const selectCategory = document.getElementById('category-input');
        const inputAgeFrom = document.getElementById('ageFrom');
        const inputAgeUpTo = document.getElementById('ageUpTo');
        const radioMonths = document.getElementById('months');
        const radioYears = document.getElementById('years');
        const checkBoxFreeShipping = document.getElementById('freeShipping');
        const inputShortDescription = document.getElementById('shortDescription');
        const inputLongDescription = document.getElementById('longDescription');
        const inputMainPhoto = document.getElementById('mainPhoto');

        document.getElementById('btn-get-one').addEventListener('click', async e => {
            const _id = prompt('Ingresar id:');
            const product = await productController.getProduct(_id);
            if (product._id) {
                console.log(product);
                input_Id.value = product._id;
                inputName.value = product.name;
                inputPrice.value = product.price;
                inputStock.value = product.stock;
                inputShortDescription.value = product.shortDescription;
                inputLongDescription.value = product.longDescription;
                inputAgeFrom.value = product.ageFrom;
                inputAgeUpTo.value = product.ageUpTo;
                checkBoxFreeShipping.checked = product.freeShipping;
                selectBrand.value = product.brand;
                selectCategory.value = product.category;
                // Verificar el valor de 'product.ageUnit' y marcar el radio button correspondiente
                if (product.ageUnit === 'meses') {
                    radioMonths.checked = true;
                } else if (product.ageUnit === 'años') {
                    radioYears.checked = true;
                } else {
                    // Agregar un caso por defecto si es necesario
                }
            } else {
                alert('Producto no encontrado');
            }
        });

        // Función para obtener el valor de los radio buttons
        const getAgeUnitChecked = () => {
            return radioMonths.checked ? 'meses' : 'años';
        };

        // Función para obtener el nombre del archivo seleccionado
          // Modificar el value del input file 
        const getUniqueSuffix = () =>{
            const extension = inputMainPhoto.value.split('.').pop();;
            // 1.Obtener el índice del último separador de ruta (backslash o barra invertida)
            
            //3. agregarle producto_ para que coincida con el nombre guardado
            const uniqueSuffix = 'product_' + Math.floor(Date.now() / 10000) + '.' + extension.toLowerCase(); 
            return uniqueSuffix 
        }

        document.getElementById('btn-delete').addEventListener('click', async e => {
            if (!input_Id.value) {
                alert('Debes ingresar un ID');
                return false;
            }

            if (confirm(`¿Estás seguro de querer eliminar el producto ID: ${input_Id.value}?`)) {
                const _id = input_Id.value;
                const deletedProduct = await productController.deleteProduct(_id);
                console.log(deletedProduct);
                alert(`El producto ${deletedProduct.name} [ID: ${deletedProduct._id}] ha sido eliminado correctamente.`);
                PageCreate.reloadTable();
            } else {
                return false;
            }
        });

        document.getElementById('btn-post').addEventListener('click', async e => {
            // Aquí realizaremos la validación de los campos requeridos antes de enviar el formulario
            const name = inputName.value;
            const price = inputPrice.value;
            const stock = inputStock.value;
            const brand = selectBrand.value;
            const category = selectCategory.value;
            const ageFrom = inputAgeFrom.value;
            const ageUpTo = inputAgeUpTo.value;
            const shortDescription = inputShortDescription.value;
            const longDescription = inputLongDescription.value;
            const mainPhoto = inputMainPhoto.value;
                
            // Realiza la validación de los campos requeridos
            if (!name || !price || !stock || !brand || !category || !ageFrom || !ageUpTo || !shortDescription || !longDescription || !mainPhoto) {
                alert('Por favor, completa todos los campos requeridos antes de enviar el formulario.');
                return; // Detiene el proceso de envío del formulario
            }

            // Si todos los campos requeridos están completos, procede con el envío del formulario
            const product = {
                name,
                price,
                stock,
                brand,
                category,
                ageFrom,
                ageUpTo,
                ageUnit: getAgeUnitChecked(),
                freeShipping: checkBoxFreeShipping.checked,
                shortDescription,
                longDescription,
                mainPhoto: getUniqueSuffix(),
            };
            const newProduct = await productController.saveProduct(product);
            console.log(newProduct);
            alert(`El producto ${newProduct.name} [ID: ${newProduct._id}] ha sido creado correctamente.`);
            PageCreate.reloadTable();
        });

        document.getElementById('btn-put').addEventListener('click', async e => {
            // Aquí realizaremos la validación de los campos requeridos antes de enviar el formulario
            const name = inputName.value;
            const price = inputPrice.value;
            const stock = inputStock.value;
            const brand = selectBrand.value;
            const category = selectCategory.value;
            const ageFrom = inputAgeFrom.value;
            const ageUpTo = inputAgeUpTo.value;
            const shortDescription = inputShortDescription.value;
            const longDescription = inputLongDescription.value;
            const mainPhoto = inputMainPhoto.value;
                
            // Realiza la validación de los campos requeridos
            if (!name || !price || !stock || !brand || !category || !ageFrom || !ageUpTo || !shortDescription || !longDescription || !mainPhoto) {
                alert('Por favor, completa todos los campos requeridos antes de enviar el formulario.');
                return; // Detiene el proceso de envío del formulario
            }

            const _id = input_Id.value;
            if (!_id) {
                alert('Debes ingresar un ID');
                return false;
            }

            if (!confirm(`¿Estás seguro de querer modificar el producto ID: ${input_Id.value}?`)) {
                return false;
            }

            const product = {
                name,
                price,
                stock,
                brand,
                category,
                ageFrom,
                ageUpTo,
                ageUnit: getAgeUnitChecked(),
                freeShipping: checkBoxFreeShipping.checked,
                shortDescription,
                longDescription,
                mainPhoto: getUniqueSuffix(),
            };

            const updatedProduct = await productController.updateProduct(_id, product);
            console.log(updatedProduct);
            alert(`El producto ${updatedProduct.name} [ID: ${updatedProduct._id}] ha sido actualizado correctamente.`);
            PageCreate.reloadTable();
        });
    }    
}

export default PageCreate;
