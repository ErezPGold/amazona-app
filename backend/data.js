import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Erez',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Puma',
                logo: '/images/logo1.png',
                description: 'best seller',
                rating: 4.5,
                numReviews: 120,
            },
        },
        {
            name: 'Jakob',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpeg',
            price: 120,
            countInStock: 3,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpeg',
            price: 100,
            countInStock: 32,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpeg',
            price: 220,
            countInStock: 10,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpeg',
            price: 78,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            name: 'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpeg',
            price: 65,
            countInStock: 3,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpeg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        },
    ]
}

export default data;