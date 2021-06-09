const express = require('express');


const app = express();
const port = process.env.PORT || 5000;


const data = {
    products: [
        {
            _id: '1',
            name: 'Keyboard Sony',
            category: 'It',
            image: "/images/keyboard.png",
            price: 200,
            countInStock: 10,
            brand:'Sony',
            rating:5,
            numReviews:3,
            description:"high quality keyboard sony..."
        },
        {
            _id: '2',
            name: 'Keyboard XPR',
            category: 'It',
            image: '/images/k2.jpg',
            price: 180,
            countInStock: 20,
            brand:'Sony',
            rating:4.5,
            numReviews:7,
            description:"high quality keyboard sony..."
        },
    ],
};



app.get('/api/products', (req, res) => {
    res.send(data.products);

})
app.get('/', (req, res) => {
    res.send("Server is ready");
});


app.listen(port, () => console.log(`Listening on port ${port}`));

