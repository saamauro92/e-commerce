import bcrypt from 'bcryptjs';



const data = {
    users: [
        {
            name: 'Basir',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
          },
          {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
    ],
    products: [
        {
   
            name: 'Keyboard Sony',
            category: 'It',
            image: "/images/keyboard.png",
            price: 200,
            countInStock: 10,
            brand: 'Sony',
            rating: 5,
            numReviews: 3,
            description: "high quality keyboard sony..."
        },
        {
     
            name: 'Keyboard XPR',
            category: 'It',
            image: '/images/k2.jpg',
            price: 180,
            countInStock: 20,
            brand: 'Sony',
            rating: 4.5,
            numReviews: 7,
            description: "high quality keyboard sony..."
        },
        {
         
            name: 'Keyboard IBM',
            category: 'It',
            image: '/images/keyboard.png',
            price: 90,
            countInStock: 0,
            brand: 'Sony',
            rating: 4.5,
            numReviews: 8,
            description: "high quality keyboard sony..."
        },
        {
           
            name: 'Keyboard LENOVO',
            category: 'It',
            image: '/images/keyboard.png',
            price: 220,
            countInStock: 15,
            brand: 'Sony',
            rating: 3.5,
            numReviews: 10,
            description: "high quality keyboard sony..."
        },
        {
          
            name: 'Keyboard Samsung',
            category: 'It',
            image: '/images/keyboard.png',
            price: 125,
            countInStock: 12,
            brand: 'Sony',
            rating: 1.5,
            numReviews: 5,
            description: "high quality keyboard sony..."
        },
    ],
};

export default data;