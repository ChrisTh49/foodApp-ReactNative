const popularData = [
    {
        id: "1",
        image: require('../images/pizza1.png'),
        title: 'Primavera pizza',
        weight: '540 gr',
        rating: '5.0',
        price: 3.99,
        sizeName: 'Medium',
        sizeNumber: '14',
        crust: 'Thin Crust',
        deliveryTime: 30,
        ingredients: [
            {
                id: '1',
                name:'Ham',
                image: require('../images/ham.png')
            },
            {
                id: '2',
                name:'Tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '3',
                name:'Cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '4',
                name:'Garlic',
                image: require('../images/garlic.png')
            },
        ]
    },
    {
        id: "2",
        image: require('../images/pizza2.png'),
        title: 'Vegetarian pizza',
        weight: '450 gr',
        rating: '4.3',
        sizeName: 'Medium',
        sizeNumber: '14',
        price: 4.99,
        crust: 'Crust',
        deliveryTime: 1,
        ingredients: [
            {
                id: '1',
                name:'Tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '2',
                name:'Cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '3',
                name:'Garlic',
                image: require('../images/garlic.png')
            },
        ]
    },
    {
        id: "3",
        image: require('../images/pizza3.png'),
        title: 'Pepperoni pizza',
        weight: '700 gr',
        rating: '4.8',
        sizeName: 'Small',
        sizeNumber: '9',
        price: 6.99,
        crust: 'Thin Crust',
        deliveryTime: 40,
        ingredients: [
            {
                id: '1',
                name:'Tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '2',
                name:'Cheese',
                image: require('../images/cheese.png')
            }
        ]
    },
];

export default popularData;