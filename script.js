
        // Hero Carousel Functionality
        let currentHeroSlide = 0;
        const heroSlides = document.querySelectorAll('.hero-carousel-slide');
        const heroIndicators = document.querySelectorAll('.hero-carousel-indicator');
        
        function showHeroSlide(index) {
            heroSlides.forEach(slide => slide.classList.remove('active'));
            heroIndicators.forEach(indicator => indicator.classList.remove('active'));
            
            heroSlides[index].classList.add('active');
            heroIndicators[index].classList.add('active');
            currentHeroSlide = index;
        }
        
        function nextHeroSlide() {
            const nextIndex = (currentHeroSlide + 1) % heroSlides.length;
            showHeroSlide(nextIndex);
        }
        
        function prevHeroSlide() {
            const prevIndex = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
            showHeroSlide(prevIndex);
        }
        
        // Auto-advance hero carousel
        let heroCarouselInterval = setInterval(nextHeroSlide, 5000);
        
        function resetHeroCarouselInterval() {
            clearInterval(heroCarouselInterval);
            heroCarouselInterval = setInterval(nextHeroSlide, 5000);
        }

        // Product data
        const products = {
            1: {
                name: "Herbicide Sélectif Bio",
                category: "herbicides",
                price: 25000,
                description: "Notre herbicide sélectif bio de haute qualité élimine efficacement les mauvaises herbes sans affecter vos cultures principales. Formulé avec des composants 100% naturels, il offre une protection durable et respectueuse de l'environnement.",
                features: [
                    "Action rapide et efficace",
                    "100% naturel et biodégradable",
                    "Protection longue durée",
                    "Compatibilité avec l'agriculture biologique"
                ],
                images: [
                    "https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1590172205845-14f190ca9e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1596638787647-904b822cee59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                ]
            },
            2: {
                name: "Herbicide Total Bio",
                category: "herbicides",
                price: 32000,
                description: "Notre herbicide total bio est la solution idéale pour préparer vos champs en éliminant toutes les végétations indésirables. Sa formule 100% naturelle assure un nettoyage complet avant vos semis.",
                features: [
                    "Action totale sur toutes les végétations",
                    "Pénétration rapide",
                    "100% naturel et écologique",
                    "Idéal pour la préparation des sols bio"
                ],
                images: [
                    "https://images.unsplash.com/photo-1590172205845-14f190ca9e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1611950506696-698b3e370ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                ]
            },
            3: {
                name: "Engrais NPK 15-15-15 Bio",
                category: "engrais",
                price: 18500,
                description: "Notre engrais NPK 15-15-15 bio offre un équilibre parfait d'azote, de phosphore et de potassium pour une croissance optimale de vos cultures. Spécialement formulé pour l'agriculture biologique.",
                features: [
                    "Équilibre parfait NPK 15-15-15",
                    "100% naturel et organique",
                    "Augmente le rendement des cultures",
                    "Certifié agriculture biologique"
                ],
                images: [
                    "https://images.unsplash.com/photo-1596638787647-904b822cee59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1611950506696-698b3e370ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1589924169466-189b6a486caa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                ]
            },
            4: {
                name: "Engrais Organique Bio",
                category: "engrais",
                price: 22000,
                description: "Notre engrais organique 100% naturel est parfait pour l'agriculture biologique. Il enrichit le sol en matière organique et améliore sa structure pour des cultures saines et vigoureuses.",
                features: [
                    "100% naturel et biologique",
                    "Améliore la structure du sol",
                    "Favorise la vie microbienne",
                    "Riche en nutriments essentiels"
                ],
                images: [
                    "https://images.unsplash.com/photo-1611950506696-698b3e370ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1596638787647-904b822cee59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-161336180345-32ace596e6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                ]
            },
            5: {
                name: "Insecticide Polyvalent Bio",
                category: "insecticides",
                price: 28500,
                description: "Notre insecticide polyvalent bio offre une protection complète contre une large gamme d'insectes nuisibles. Sa formulation 100% naturelle cible les ravageurs tout en préservant les insectes bénéfiques.",
                features: [
                    "Spectre d'action large",
                    "Action rapide et persistante",
                    "100% naturel et écologique",
                    "Respectueux des auxiliaires"
                ],
                images: [
                    "https://images.unsplash.com/photo-1589924169466-189b6a486caa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-161336180345-32ace596e6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1590172205845-14f190ca9e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                ]
            },
            6: {
                name: "Insecticide Spécifique Bio",
                category: "insecticides",
                price: 31000,
                description: "Notre insecticide spécifique bio cible avec précision les insectes ravageurs les plus problématiques sans affecter les insectes auxiliaires bénéfiques. Idéal pour une lutte intégrée en agriculture biologique.",
                features: [
                    "Action ciblée sur ravageurs spécifiques",
                    "Préserve la faune auxiliaire",
                    "100% naturel et biodégradable",
                    "Efficacité prouvée en conditions réelles"
                ],
                images: [
                    "https://images.unsplash.com/photo-161336180345-32ace596e6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1589924169466-189b6a486caa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                ]
            }
        };

        // Cart functionality
        let cart = JSON.parse(localStorage.getItem('sacgs-cart')) || [];
        
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cart-count').textContent = totalItems;
            document.getElementById('mobile-cart-count').textContent = totalItems;
        }
        
        function calculateCartTotals() {
            let subtotal = 0;
            cart.forEach(item => {
                const product = products[item.id];
                subtotal += product.price * item.quantity;
            });
            
            const shipping = subtotal > 0 ? 5000 : 0; // Frais de livraison fixe
            const total = subtotal + shipping;
            
            return { subtotal, shipping, total };
        }
        
        function updateCartDisplay() {
            const cartItems = document.getElementById('cart-items');
            const emptyCartMessage = document.getElementById('empty-cart-message');
            const checkoutBtn = document.getElementById('checkout-btn');
            const { subtotal, shipping, total } = calculateCartTotals();
            
            document.getElementById('cart-subtotal').textContent = `${subtotal.toLocaleString()} FCFA`;
            document.getElementById('cart-shipping').textContent = `${shipping.toLocaleString()} FCFA`;
            document.getElementById('cart-total').textContent = `${total.toLocaleString()} FCFA`;
            
            if (cart.length === 0) {
                emptyCartMessage.style.display = 'block';
                checkoutBtn.disabled = true;
                cartItems.innerHTML = '<p id="empty-cart-message" class="text-center text-gray-500 py-8">Votre panier est vide</p>';
                return;
            }
            
            emptyCartMessage.style.display = 'none';
            checkoutBtn.disabled = false;
            
            cartItems.innerHTML = '';
            
            cart.forEach((item, index) => {
                const product = products[item.id];
                const itemTotal = product.price * item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item bg-gray-50 p-4 rounded-lg relative';
                cartItem.innerHTML = `
                    <div class="flex items-center">
                        <img src="${product.images[0]}" alt="${product.name}" class="w-16 h-16 object-cover rounded">
                        <div class="ml-4 flex-grow">
                            <h4 class="font-medium text-sm">${product.name}</h4>
                            <p class="text-secondary font-semibold">${product.price.toLocaleString()} FCFA</p>
                            <div class="flex items-center mt-1">
                                <button class="decrease-cart-item quantity-btn px-2 py-1 text-gray-600 hover:bg-gray-200 rounded" data-index="${index}">-</button>
                                <span class="mx-2 font-medium">${item.quantity}</span>
                                <button class="increase-cart-item quantity-btn px-2 py-1 text-gray-600 hover:bg-gray-200 rounded" data-index="${index}">+</button>
                                <span class="ml-2 text-sm font-semibold">= ${itemTotal.toLocaleString()} FCFA</span>
                            </div>
                        </div>
                        <button class="cart-item-remove remove-cart-item text-red-500 ml-2 p-1 rounded-full hover:bg-red-50" data-index="${index}">
                            <i data-feather="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            feather.replace();
        }
        
        function addToCart(productId, quantity) {
            const existingItemIndex = cart.findIndex(item => item.id === productId);
            
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                cart.push({
                    id: productId,
                    quantity: quantity
                });
            }
            
            localStorage.setItem('sacgs-cart', JSON.stringify(cart));
            updateCartCount();
            updateCartDisplay();
            
            // Show success notification
            showNotification('Produit ajouté au panier!');
        }
        
        function removeFromCart(index) {
            cart.splice(index, 1);
            localStorage.setItem('sacgs-cart', JSON.stringify(cart));
            updateCartCount();
            updateCartDisplay();
        }
        
        function updateCartItemQuantity(index, change) {
            cart[index].quantity += change;
            
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                localStorage.setItem('sacgs-cart', JSON.stringify(cart));
                updateCartDisplay();
            }
        }
        
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'fixed top-20 right-4 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }
        
        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                document.querySelectorAll('.product-card').forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
                
                // Update active state of filter buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('bg-secondary', 'text-white');
                    btn.classList.add('border-secondary', 'text-secondary');
                });
                
                button.classList.remove('border-secondary', 'text-secondary');
                button.classList.add('bg-secondary', 'text-white');
            });
        });
        
        // Modal functionality
        const productModal = document.getElementById('product-modal');
        let currentProductId = null;
        let currentSlide = 0;
        
        function showModal(productId) {
            currentProductId = productId;
            const product = products[productId];
            
            document.getElementById('modal-product-name').textContent = product.name;
            document.getElementById('modal-product-description').textContent = product.description;
            document.getElementById('modal-product-price').textContent = `${product.price.toLocaleString()} FCFA`;
            
            // Set features list
            const featuresList = document.getElementById('modal-product-features');
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            // Set images
            document.getElementById('modal-main-image').src = product.images[0];
            document.getElementById('modal-secondary-image-1').src = product.images[1];
            document.getElementById('modal-secondary-image-2').src = product.images[2];
            
            // Reset carousel
            currentSlide = 0;
            updateCarousel();
            
            // Show modal
            productModal.classList.remove('modal-hidden');
            productModal.classList.add('modal-visible');
            document.body.style.overflow = 'hidden';
        }
        
        function hideModal() {
            productModal.classList.remove('modal-visible');
            productModal.classList.add('modal-hidden');
            document.body.style.overflow = 'auto';
        }
        
        function updateCarousel() {
            document.querySelectorAll('.carousel-slide').forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.remove('bg-gray-300');
                    indicator.classList.add('bg-secondary');
                } else {
                    indicator.classList.remove('bg-secondary');
                    indicator.classList.add('bg-gray-300');
                }
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % 3;
            updateCarousel();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + 3) % 3;
            updateCarousel();
        }
        
        // Cart sidebar functionality
        const cartSidebar = document.getElementById('cart-sidebar');
        
        function showCart() {
            cartSidebar.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
            updateCartDisplay();
        }
        
        function hideCart() {
            cartSidebar.classList.add('translate-x-full');
            document.body.style.overflow = 'auto';
        }
        
        // Checkout modal functionality
        const checkoutModal = document.getElementById('checkout-modal');
        
        function showCheckout() {
            checkoutModal.classList.remove('modal-hidden');
            checkoutModal.classList.add('modal-visible');
            document.body.style.overflow = 'hidden';
            
            // Update order summary
            const orderSummary = document.getElementById('order-summary');
            const orderTotal = document.getElementById('order-total');
            const { subtotal, shipping, total } = calculateCartTotals();
            
            let summaryHTML = '';
            
            cart.forEach(item => {
                const product = products[item.id];
                const itemTotal = product.price * item.quantity;
                
                summaryHTML += `
                    <div class="flex justify-between py-1">
                        <span>${product.name} x${item.quantity}</span>
                        <span>${itemTotal.toLocaleString()} FCFA</span>
                    </div>
                `;
            });
            
            summaryHTML += `
                <div class="flex justify-between py-1 border-t mt-2">
                    <span>Sous-total:</span>
                    <span>${subtotal.toLocaleString()} FCFA</span>
                </div>
                <div class="flex justify-between py-1">
                    <span>Livraison:</span>
                    <span>${shipping.toLocaleString()} FCFA</span>
                </div>
            `;
            
            orderSummary.innerHTML = summaryHTML;
            orderTotal.textContent = `${total.toLocaleString()} FCFA`;
        }
        
        function hideCheckout() {
            checkoutModal.classList.remove('modal-visible');
            checkoutModal.classList.add('modal-hidden');
            document.body.style.overflow = 'auto';
        }
        
        function submitOrder(event) {
            event.preventDefault();
            
            const name = document.getElementById('customer-name').value;
            const phone = document.getElementById('customer-phone').value;
            const email = document.getElementById('customer-email').value;
            const address = document.getElementById('customer-address').value;
            
            // Format WhatsApp message
            let message = `Bonjour SACGS-CI,%0A%0AJe souhaite commander les produits agro-industriels suivants:%0A%0A`;
            
            cart.forEach(item => {
                const product = products[item.id];
                const itemTotal = product.price * item.quantity;
                message += `- ${product.name} (x${item.quantity}) : ${itemTotal.toLocaleString()} FCFA%0A`;
            });
            
            const { subtotal, shipping, total } = calculateCartTotals();
            message += `%0ASous-total: ${subtotal.toLocaleString()} FCFA%0A`;
            message += `Livraison: ${shipping.toLocaleString()} FCFA%0A`;
            message += `*Total: ${total.toLocaleString()} FCFA*%0A%0A`;
            message += `*Informations client:*%0A`;
            message += `Nom: ${name}%0A`;
            message += `Téléphone: ${phone}%0A`;
            if (email) message += `Email: ${email}%0A`;
            message += `Adresse: ${address}`;
            
            // Clear cart
            cart = [];
            localStorage.setItem('sacgs-cart', JSON.stringify(cart));
            updateCartCount();
            updateCartDisplay();
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/22520304050?text=${message}`, '_blank');
            hideCheckout();
        }
        
        // Mobile menu functionality
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize cart
            updateCartCount();
            updateCartDisplay();
            
            // Hero carousel events
            document.getElementById('hero-next').addEventListener('click', () => {
                nextHeroSlide();
                resetHeroCarouselInterval();
            });
            
            document.getElementById('hero-prev').addEventListener('click', () => {
                prevHeroSlide();
                resetHeroCarouselInterval();
            });
            
            heroIndicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showHeroSlide(index);
                    resetHeroCarouselInterval();
                });
            });
            
            // Product modal events
            document.querySelectorAll('.view-details-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const productId = button.getAttribute('data-product-id');
                    showModal(parseInt(productId));
                });
            });
            
            document.getElementById('close-modal').addEventListener('click', hideModal);
            document.getElementById('add-to-cart-modal').addEventListener('click', () => {
                const quantity = parseInt(document.getElementById('quantity').value);
                addToCart(currentProductId, quantity);
                hideModal();
            });
            
            // Carousel events
            document.getElementById('next-btn').addEventListener('click', nextSlide);
            document.getElementById('prev-btn').addEventListener('click', prevSlide);
            
            document.querySelectorAll('.carousel-indicator').forEach(indicator => {
                indicator.addEventListener('click', () => {
                    currentSlide = parseInt(indicator.getAttribute('data-slide'));
                    updateCarousel();
                });
            });
            
            // Quantity controls
            document.getElementById('increase-qty').addEventListener('click', () => {
                const quantityInput = document.getElementById('quantity');
                quantityInput.value = parseInt(quantityInput.value) + 1;
            });
            
            document.getElementById('decrease-qty').addEventListener('click', () => {
                const quantityInput = document.getElementById('quantity');
                if (parseInt(quantityInput.value) > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1;
                }
            });
            
            // Cart events
            document.getElementById('cart-btn').addEventListener('click', showCart);
            document.getElementById('mobile-cart-btn').addEventListener('click', showCart);
            document.getElementById('close-cart').addEventListener('click', hideCart);
            
            // Checkout events
            document.getElementById('checkout-btn').addEventListener('click', showCheckout);
            document.getElementById('close-checkout').addEventListener('click', hideCheckout);
            document.getElementById('checkout-form').addEventListener('submit', submitOrder);
            
            // Close modals when clicking outside
            productModal.addEventListener('click', (e) => {
                if (e.target === productModal) hideModal();
            });
            
            checkoutModal.addEventListener('click', (e) => {
                if (e.target === checkoutModal) hideCheckout();
            });
            
            cartSidebar.addEventListener('click', (e) => {
                if (e.target === cartSidebar) hideCart();
            });
            
            // Cart item manipulation
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-cart-item') || e.target.closest('.remove-cart-item')) {
                    const button = e.target.classList.contains('remove-cart-item') ? e.target : e.target.closest('.remove-cart-item');
                    const index = button.getAttribute('data-index');
                    removeFromCart(parseInt(index));
                } else if (e.target.classList.contains('increase-cart-item')) {
                    const index = e.target.getAttribute('data-index');
                    updateCartItemQuantity(parseInt(index), 1);
                } else if (e.target.classList.contains('decrease-cart-item')) {
                    const index = e.target.getAttribute('data-index');
                    updateCartItemQuantity(parseInt(index), -1);
                }
            });
        });