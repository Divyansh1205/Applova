// Enhanced Application State
const state = {
    currentUser: null,
    categories: [
        { id: 1, name: 'Appetizers', description: 'Starters and small plates', items: [] },
        { id: 2, name: 'Main Course', description: 'Hearty main dishes', items: [] },
        { id: 3, name: 'Breads', description: 'Traditional Indian breads', items: [] },
        { id: 4, name: 'Desserts', description: 'Sweet treats', items: [] },
        { id: 5, name: 'Drinks', description: 'Beverages and traditional drinks', items: [] }
    ],
    menuItems: [],
    cart: [],
    orders: [],
    currentSection: 'dashboardHome',
    darkMode: false
};

// Initialize with Indian dishes
function initializeData() {
    state.menuItems = [
        { 
            id: 1, 
            name: 'Paneer Tikka', 
            price: 299, 
            category: 'appetizers', 
            description: 'Cottage cheese cubes marinated in spices and grilled in tandoor',
            badge: 'Vegetarian'
        },
        { 
            id: 2, 
            name: 'Manchuraian', 
            price: 349, 
            category: 'appetizers', 
            description: 'Juicy fresh pieces marinated in yogurt and spices, grilled to perfection',
            badge: 'Veg'
        },
        { 
            id: 3, 
            name: 'Butter Paneer', 
            price: 449, 
            category: 'mains', 
            description: 'Tender Paneer in rich tomato and butter gravy, served with naan',
            badge: 'Chef Special'
        },
        { 
            id: 4, 
            name: 'Paneer Butter Masala', 
            price: 399, 
            category: 'mains', 
            description: 'Cottage cheese in creamy tomato and cashew gravy',
            badge: 'Vegetarian'
        },
        { 
            id: 5, 
            name: 'Biryani Paneer', 
            price: 379, 
            category: 'mains', 
            description: 'Fragrant basmati rice cooked with chicken and aromatic spices',
            badge: 'Popular'
        },
        { 
            id: 6, 
            name: 'Dal Makhani', 
            price: 329, 
            category: 'mains', 
            description: 'Black lentils slow-cooked with butter and cream',
            badge: 'Vegetarian'
        },
        { 
            id: 7, 
            name: 'Garlic Naan', 
            price: 89, 
            category: 'breads', 
            description: 'Soft leavened bread with garlic and butter',
            badge: null
        },
        { 
            id: 8, 
            name: 'Butter Naan', 
            price: 79, 
            category: 'breads', 
            description: 'Classic Indian bread brushed with butter',
            badge: null
        },
        { 
            id: 9, 
            name: 'Gulab Jamun', 
            price: 149, 
            category: 'desserts', 
            description: 'Deep-fried milk balls soaked in sugar syrup',
            badge: 'Best Seller'
        },
        { 
            id: 10, 
            name: 'Rasmalai', 
            price: 169, 
            category: 'desserts', 
            description: 'Soft cheese patties in sweetened, thickened milk',
            badge: null
        },
        { 
            id: 11, 
            name: 'Mango Lassi', 
            price: 129, 
            category: 'drinks', 
            description: 'Refreshing yogurt drink with mango pulp',
            badge: 'Seasonal'
        },
        { 
            id: 12, 
            name: 'Masala Chai', 
            price: 59, 
            category: 'drinks', 
            description: 'Traditional Indian spiced tea',
            badge: null
        }
    ];

    state.orders = [
        { 
            id: 1001, 
            status: 'new', 
            items: ['Paneer Tikka', 'Butter Naan', 'Gulab Jamun'], 
            total: 897, 
            time: '12:30 PM',
            table: 'Table 05',
            guests: 2
        },
        { 
            id: 1002, 
            status: 'preparing', 
            items: ['Paneer Biryani', 'Garlic Naan', 'Mango Lassi'], 
            total: 597, 
            time: '12:15 PM',
            table: 'Table 12',
            guests: 1
        },
        { 
            id: 1003, 
            status: 'ready', 
            items: ['Paneer Butter Masala', 'Butter Naan', 'Masala Chai'], 
            total: 537, 
            time: '12:00 PM',
            table: 'Table 08',
            guests: 3
        }
    ];

    // Populate category items
    state.categories.forEach(category => {
        category.items = state.menuItems.filter(item => 
            item.category === category.name.toLowerCase()
        );
    });
}

// Enhanced Auth Functions
function switchToLogin() {
    document.getElementById('signupPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    showToast('Sign in to your account', 'info');
}

function switchToSignup() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('signupPage').style.display = 'flex';
    showToast('Create your business account', 'info');
}

function showForgotPassword() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Reset Password</h2>
                <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="modal-body">
                <form onsubmit="event.preventDefault(); showToast('Password reset link sent to your email', 'success'); this.parentElement.parentElement.parentElement.remove();">
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-control" placeholder="Enter your email" required>
                    </div>
                    <button type="submit" class="btn">
                        <i class="fas fa-paper-plane"></i> Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Enhanced Form Handlers
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'var(--danger)';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                const businessName = this.querySelector('input[type="text"]').value;
                state.currentUser = { 
                    name: businessName, 
                    email: this.querySelector('input[type="email"]').value,
                    avatar: businessName.substring(0, 2).toUpperCase()
                };
                
                showToast('Account created successfully!', 'success');
                setTimeout(() => {
                    document.getElementById('signupPage').style.display = 'none';
                    document.getElementById('dashboard').style.display = 'block';
                    initializeData();
                    loadDashboard();
                    updateUserProfile();
                }, 1500);
            }
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (email && password) {
                state.currentUser = { 
                    name: 'Div Mis', 
                    email: email,
                    avatar: 'RS'
                };
                
                showToast('Welcome back!', 'success');
                setTimeout(() => {
                    document.getElementById('loginPage').style.display = 'none';
                    document.getElementById('dashboard').style.display = 'block';
                    initializeData();
                    loadDashboard();
                    updateUserProfile();
                }, 1000);
            }
        });
    }
    
    // Set default view to signup
    document.getElementById('signupPage').style.display = 'flex';
    
    // Add event listeners for modal close on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
});

// Enhanced Dashboard Functions
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('expanded');
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
    
    // Update active nav link
    const navMap = {
        'dashboardHome': '.nav-item:nth-child(1) .nav-link',
        'menuBuilder': '.nav-item:nth-child(2) .nav-link',
        'orders': '.nav-item:nth-child(3) .nav-link',
        'analytics': '.nav-item:nth-child(4) .nav-link',
        'settings': '.nav-item:nth-child(6) .nav-link'
    };
    
    if (navMap[sectionId]) {
        document.querySelector(navMap[sectionId]).classList.add('active');
    }
    
    state.currentSection = sectionId;
    
    // Load section-specific content
    switch(sectionId) {
        case 'menuBuilder':
            loadMenuBuilder();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'dashboardHome':
            loadDashboard();
            break;
    }
}

function loadDashboard() {
    // Update statistics with animation
    const stats = [
        { element: '.stat-card:nth-child(1) .stat-value', value: state.orders.filter(o => o.status === 'new').length },
        { element: '.stat-card:nth-child(2) .stat-value', value: '₹' + state.orders.reduce((sum, order) => sum + order.total, 0) },
        { element: '.stat-card:nth-child(3) .stat-value', value: '48' },
        { element: '.stat-card:nth-child(4) .stat-value', value: state.menuItems.length }
    ];
    
    stats.forEach((stat, index) => {
        setTimeout(() => {
            const element = document.querySelector(stat.element);
            if (element) {
                element.textContent = stat.value;
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 300);
            }
        }, index * 200);
    });
}

function loadMenuBuilder() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    categoriesGrid.innerHTML = '';
    
    state.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-header">
                <div>
                    <div class="category-title">${category.name}</div>
                    <div style="color: var(--gray); font-size: 14px; margin-top: 5px;">${category.description}</div>
                </div>
                <div class="category-badge">${category.items.length} items</div>
            </div>
            <div class="items-list">
                ${category.items.map(item => `
                    <div class="item-row">
                        <div class="item-info">
                            <h4>${item.name}</h4>
                            <div class="item-price">₹${item.price}</div>
                        </div>
                        <div class="item-actions">
                            <button class="icon-btn" onclick="editItem(${item.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="icon-btn" onclick="toggleItemAvailability(${item.id})">
                                <i class="fas fa-toggle-on"></i>
                            </button>
                            <button class="icon-btn" onclick="deleteItem(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-sm" style="width: 100%; margin-top: 15px;" onclick="showAddItemModal(${category.id})">
                <i class="fas fa-plus"></i> Add Item to ${category.name}
            </button>
        `;
        categoriesGrid.appendChild(categoryCard);
    });
}

function loadOrders() {
    // Clear existing orders
    ['newOrders', 'preparingOrders', 'readyOrders'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '';
        }
    });
    
    // Populate orders by status
    state.orders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        orderCard.draggable = true;
        orderCard.id = `order-${order.id}`;
        orderCard.ondragstart = (e) => dragOrder(e, order.id);
        
        orderCard.innerHTML = `
            <div class="order-header">
                <div>
                    <div class="order-id">#${order.id}</div>
                    <div class="order-time">
                        <i class="far fa-clock"></i> ${order.time} | ${order.table} | ${order.guests} guest${order.guests > 1 ? 's' : ''}
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    ${order.status === 'new' ? `
                        <button class="icon-btn" onclick="updateOrderStatus(${order.id}, 'preparing')">
                            <i class="fas fa-check"></i>
                        </button>
                    ` : order.status === 'preparing' ? `
                        <button class="icon-btn" onclick="updateOrderStatus(${order.id}, 'ready')">
                            <i class="fas fa-check-double"></i>
                        </button>
                    ` : ''}
                    <button class="icon-btn" onclick="completeOrder(${order.id})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-footer">
                <div class="order-total">₹${order.total}</div>
                <button class="icon-btn" onclick="viewOrderDetails(${order.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        `;
        
        const container = document.getElementById(`${order.status}Orders`);
        if (container) {
            container.appendChild(orderCard);
        }
    });
    
    // Update order counts
    const counts = {
        new: state.orders.filter(o => o.status === 'new').length,
        preparing: state.orders.filter(o => o.status === 'preparing').length,
        ready: state.orders.filter(o => o.status === 'ready').length
    };
    
    Object.entries(counts).forEach(([status, count]) => {
        const element = document.querySelector(`#${status}Orders .order-count`);
        if (element) {
            element.textContent = count;
            // Animate count change
            element.style.transform = 'scale(1.2)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 300);
        }
    });
}

// Enhanced Order Management Functions
function dragOrder(e, orderId) {
    e.dataTransfer.setData('text/plain', orderId.toString());
    e.dataTransfer.effectAllowed = 'move';
}

function allowDrop(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function dropOrder(e) {
    e.preventDefault();
    const orderId = parseInt(e.dataTransfer.getData('text/plain'));
    const newStatus = e.target.closest('.order-column').id.replace('Orders', '');
    
    updateOrderStatus(orderId, newStatus);
}

function updateOrderStatus(orderId, newStatus) {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
        const oldStatus = order.status;
        order.status = newStatus;
        
        // Move order card to new column
        const orderCard = document.getElementById(`order-${orderId}`);
        if (orderCard) {
            orderCard.style.transform = 'scale(0.9)';
            orderCard.style.opacity = '0.5';
            
            setTimeout(() => {
                loadOrders();
                showToast(`Order #${orderId} moved to ${newStatus}`, 'success');
            }, 300);
        }
    }
}

function completeOrder(orderId) {
    state.orders = state.orders.filter(o => o.id !== orderId);
    loadOrders();
    showToast(`Order #${orderId} completed successfully`, 'success');
}

function refreshOrders() {
    // Simulate new orders
    const newOrderId = Math.floor(Math.random() * 9000) + 1000;
    const newOrder = {
        id: newOrderId,
        status: 'new',
        items: ['Seasonal Special'],
        total: Math.floor(Math.random() * 500) + 250,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        table: `Table ${Math.floor(Math.random() * 20) + 1}`,
        guests: Math.floor(Math.random() * 6) + 1
    };
    
    state.orders.push(newOrder);
    loadOrders();
    showToast(`New order #${newOrderId} received`, 'info');
}

// Enhanced Customer Menu Functions
function showCustomerMenu() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('customerMenu').style.display = 'block';
    document.getElementById('cartPage').style.display = 'none';
    
    loadCustomerMenu();
    showToast('Browse our delicious Indian menu!', 'info');
}

function loadCustomerMenu() {
    const menuGrid = document.getElementById('menuItemsGrid');
    menuGrid.innerHTML = '';
    
    state.menuItems.forEach(item => {
        const cartItem = state.cart.find(cartItem => cartItem.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item-card';
        menuItem.innerHTML = `
            ${item.badge ? `<div class="item-badge">${item.badge}</div>` : ''}
            <div class="item-image">
                <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80" alt="${item.name}">
            </div>
            <div class="item-content">
                <div class="item-header">
                    <div>
                        <div class="item-name">${item.name}</div>
                        <div class="item-description">${item.description}</div>
                    </div>
                    <div class="item-price">₹${item.price}</div>
                </div>
                <div class="item-footer">
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="decreaseQuantity(${item.id})" ${quantity === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <div class="quantity" id="qty-${item.id}">${quantity}</div>
                        <button class="qty-btn" onclick="increaseQuantity(${item.id})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="btn btn-sm" style="width: auto;" onclick="addToCart(${item.id})" ${quantity > 0 ? 'disabled style="background: var(--success);"' : ''}>
                        ${quantity > 0 ? '<i class="fas fa-check"></i> Added' : '<i class="fas fa-plus"></i> Add to Cart'}
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

function filterMenu(category) {
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter animation
    const menuGrid = document.getElementById('menuItemsGrid');
    menuGrid.style.opacity = '0.5';
    menuGrid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        if (category === 'all') {
            loadCustomerMenu();
        } else {
            const filteredItems = state.menuItems.filter(item => item.category === category);
            // Update grid with filtered items
            menuGrid.innerHTML = '';
            filteredItems.forEach(item => {
                const cartItem = state.cart.find(cartItem => cartItem.id === item.id);
                const quantity = cartItem ? cartItem.quantity : 0;
                
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item-card';
                menuItem.innerHTML = `
                    ${item.badge ? `<div class="item-badge">${item.badge}</div>` : ''}
                    <div class="item-image">
                        <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80" alt="${item.name}">
                    </div>
                    <div class="item-content">
                        <div class="item-header">
                            <div>
                                <div class="item-name">${item.name}</div>
                                <div class="item-description">${item.description}</div>
                            </div>
                            <div class="item-price">₹${item.price}</div>
                        </div>
                        <div class="item-footer">
                            <div class="quantity-control">
                                <button class="qty-btn" onclick="decreaseQuantity(${item.id})" ${quantity === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                                    <i class="fas fa-minus"></i>
                                </button>
                                <div class="quantity" id="qty-${item.id}">${quantity}</div>
                                <button class="qty-btn" onclick="increaseQuantity(${item.id})">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="btn btn-sm" style="width: auto;" onclick="addToCart(${item.id})" ${quantity > 0 ? 'disabled style="background: var(--success);"' : ''}>
                                ${quantity > 0 ? '<i class="fas fa-check"></i> Added' : '<i class="fas fa-plus"></i> Add to Cart'}
                            </button>
                        </div>
                    </div>
                `;
                menuGrid.appendChild(menuItem);
            });
        }
        menuGrid.style.opacity = '1';
        menuGrid.style.transform = 'translateY(0)';
    }, 300);
}

// Enhanced Cart Functions
function addToCart(itemId) {
    const item = state.menuItems.find(i => i.id === itemId);
    const existingItem = state.cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            id: itemId,
            name: item.name,
            price: item.price,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80'
        });
    }
    
    updateCart();
    showToast(`${item.name} added to cart`, 'success');
}

function increaseQuantity(itemId) {
    addToCart(itemId);
}

function decreaseQuantity(itemId) {
    const item = state.cart.find(i => i.id === itemId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            state.cart = state.cart.filter(i => i.id !== itemId);
        }
        
        updateCart();
        showToast(`Updated ${item.name} quantity`, 'info');
    }
}

function updateCart() {
    // Update cart count
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Update quantity displays in menu
    state.cart.forEach(cartItem => {
        const qtyDisplay = document.getElementById(`qty-${cartItem.id}`);
        if (qtyDisplay) {
            qtyDisplay.textContent = cartItem.quantity;
            qtyDisplay.parentElement.querySelector('.btn').innerHTML = 
                cartItem.quantity > 0 ? '<i class="fas fa-check"></i> Added' : '<i class="fas fa-plus"></i> Add to Cart';
            qtyDisplay.parentElement.querySelector('.btn').style.background = 
                cartItem.quantity > 0 ? 'var(--success)' : '';
            qtyDisplay.parentElement.querySelector('.btn').disabled = cartItem.quantity > 0;
        }
    });
}

function showCart() {
    document.getElementById('customerMenu').style.display = 'none';
    document.getElementById('cartPage').style.display = 'block';
    
    loadCart();
}

function loadCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    
    if (state.cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 80px; color: var(--gray-light); margin-bottom: 20px;">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3 style="color: var(--gray); margin-bottom: 10px;">Your cart is empty</h3>
                <p style="color: var(--gray);">Add delicious items from our menu</p>
                <button class="btn btn-outline" onclick="showCustomerMenu()" style="margin-top: 20px;">
                    <i class="fas fa-utensils"></i> Browse Menu
                </button>
            </div>
        `;
        updateCartSummary(0);
        return;
    }
    
    let subtotal = 0;
    
    state.cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                </div>
            </div>
            <div class="cart-item-controls">
                <div style="display: flex; align-items: center; gap: 15px; background: var(--light); padding: 10px 20px; border-radius: var(--radius-xl);">
                    <button class="qty-btn" onclick="decreaseQuantity(${item.id})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <div style="font-weight: 700; font-size: 18px; min-width: 30px; text-align: center;">${item.quantity}</div>
                    <button class="qty-btn" onclick="increaseQuantity(${item.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div style="text-align: right;">
                    <div class="cart-item-price" style="font-size: 22px;">₹${itemTotal}</div>
                    <button class="icon-btn" onclick="removeFromCart(${item.id})" style="margin-top: 10px;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    updateCartSummary(subtotal);
}

function removeFromCart(itemId) {
    const item = state.cart.find(i => i.id === itemId);
    state.cart = state.cart.filter(i => i.id !== itemId);
    updateCart();
    loadCart();
    showToast(`${item.name} removed from cart`, 'warning');
}

function updateCartSummary(subtotal) {
    const tax = subtotal * 0.05; // 5% tax for India
    const service = subtotal * 0.05; // 5% service charge
    const total = subtotal + tax + service;
    
    document.getElementById('subtotal').textContent = '₹' + subtotal;
    document.getElementById('tax').textContent = '₹' + tax.toFixed(0);
    document.getElementById('service').textContent = '₹' + service.toFixed(0);
    document.getElementById('total').textContent = '₹' + total.toFixed(0);
    
    // Animate total update
    const totalElement = document.getElementById('total');
    totalElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        totalElement.style.transform = 'scale(1)';
    }, 300);
}

function checkout() {
    if (state.cart.length === 0) {
        showToast('Your cart is empty!', 'warning');
        return;
    }
    
    const orderId = Math.floor(Math.random() * 9000) + 1000;
    const orderTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderItems = state.cart.map(item => item.name);
    
    const newOrder = {
        id: orderId,
        status: 'new',
        items: orderItems,
        total: orderTotal + (orderTotal * 0.10), // Include tax and service
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        table: 'Table 05',
        guests: 2
    };
    
    state.orders.push(newOrder);
    state.cart = [];
    
    updateCart();
    
    showToast(`Order #${orderId} placed successfully!`, 'success');
    
    // Show order confirmation
    setTimeout(() => {
        showCustomerMenu();
        if (state.currentSection === 'orders') {
            loadOrders();
        }
        showToast(`Order #${orderId} received in kitchen`, 'info');
    }, 2000);
}

// Enhanced Modal Functions
function showAddCategoryModal() {
    document.getElementById('addCategoryModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Toast Notification System
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    toast.style.borderLeftColor = colors[type] || colors.info;
    toast.innerHTML = `
        <div class="toast-icon" style="color: ${colors[type] || colors.info}">
            <i class="${icons[type] || icons.info}"></i>
        </div>
        <div class="toast-content">
            <h4>${type.charAt(0).toUpperCase() + type.slice(1)}</h4>
            <p>${message}</p>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 5000);
}

// Dark Mode Toggle
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-mode', state.darkMode);
    showToast(state.darkMode ? 'Dark mode enabled' : 'Light mode enabled', 'info');
}

// Update User Profile
function updateUserProfile() {
    if (state.currentUser) {
        const avatar = document.querySelector('.user-avatar');
        const name = document.querySelector('.user-info h4');
        if (avatar) avatar.textContent = state.currentUser.avatar;
        if (name) name.textContent = state.currentUser.name;
    }
}

// Additional utility functions
function editItem(itemId) {
    showToast('Edit feature coming soon!', 'info');
}

function toggleItemAvailability(itemId) {
    showToast('Item availability toggled', 'info');
}

function deleteItem(itemId) {
    if (confirm('Are you sure you want to delete this item?')) {
        state.menuItems = state.menuItems.filter(item => item.id !== itemId);
        loadMenuBuilder();
        showToast('Item deleted successfully', 'success');
    }
}

function viewOrderDetails(orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Order #${order.id} Details</h2>
                    <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <div style="margin-bottom: 25px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                            <div>
                                <div style="color: var(--gray); font-size: 14px;">Table</div>
                                <div style="font-size: 18px; font-weight: 600;">${order.table}</div>
                            </div>
                            <div>
                                <div style="color: var(--gray); font-size: 14px;">Guests</div>
                                <div style="font-size: 18px; font-weight: 600;">${order.guests}</div>
                            </div>
                            <div>
                                <div style="color: var(--gray); font-size: 14px;">Time</div>
                                <div style="font-size: 18px; font-weight: 600;">${order.time}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="margin-bottom: 15px; font-size: 18px;">Order Items</h3>
                        ${order.items.map(item => `
                            <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05);">
                                <span>${item}</span>
                                <span style="font-weight: 600;">₹100</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div style="border-top: 2px solid rgba(0,0,0,0.1); padding-top: 20px;">
                        <div style="display: flex; justify-content: space-between; font-size: 20px; font-weight: 700; color: var(--primary);">
                            <span>Total</span>
                            <span>₹${order.total}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

function showProfileMenu() {
    showToast('Profile menu coming soon!', 'info');
}