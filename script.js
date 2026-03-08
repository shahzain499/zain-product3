// Add this to your existing script.js (replace products array)
const products = [
    { 
        id: 1, 
        name: 'iPhone 15 Pro Max', 
        price: 1299, 
        images: [
            'https://images.unsplash.com/photo-1692111875257-374b1f94de50?w=400',
            'https://images.unsplash.com/photo-1692111875257-374b1f94de50?w=400&crop=entropy',
            'https://images.unsplash.com/photo-1692111875257-374b1f94de50?w=400&fit=crop'
        ]
    },
    { 
        id: 2, 
        name: 'MacBook Pro M3', 
        price: 1999, 
        images: [
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&crop=entropy',
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&fit=crop'
        ]
    },
    { 
        id: 3, 
        name: 'AirPods Pro 2', 
        price: 249, 
        images: [
            'https://images.unsplash.com/photo-1587429433482-84b9deceaebf?w=400',
            'https://images.unsplash.com/photo-1587429433482-84b9deceaebf?w=400&crop=entropy'
        ]
    }
];

// Add lightbox function
function openLightbox(productId) {
    const product = products.find(p => p.id === productId);
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay" onclick="closeLightbox()">
            <div class="lightbox-content" onclick="event.stopPropagation()">
                <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
                <img src="${product.images[0]}" id="lightbox-img" alt="${product.name}">
                <div class="lightbox-thumbs">
                    ${product.images.map((img, i) => 
                        `<img src="${img}" onclick="changeLightboxImg(${i})" class="thumb">`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.remove();
}

function changeLightboxImg(index) {
    const img = document.getElementById('lightbox-img');
    const productId = parseInt(img.dataset.productId);
    const product = products.find(p => p.id === productId);
    img.src = product.images[index];
}
