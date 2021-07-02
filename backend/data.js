import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name:'Indra',
            email:'admin@example.com',
            password: bcrypt.hashSync('123456789', 8),
            isAdmin: true
        },
        {
            name:'Andri',
            email:'user@example.com',
            password: bcrypt.hashSync('123456789', 8),
            isAdmin: false
        },
    ],
    products: [
        {
            name: 'Shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 
            img: 'https://image.freepik.com/free-photo/men-white-espadrilles-slip-shoes_53876-97142.jpg',
            price: 599000,
            discPrice:385000,
            cb: false,
            grosir: false,
            rating: 4.5,
            reviews: 77,
            sold: 272,
            stock: 324,
            category: 'Shoes',
            brand: 'MyShoes',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, temporibus! Iure repudiandae, iusto cum facilis sunt sapiente odit nostrum atque nam consequatur unde sed quidem hic dolorum. Consequatur, enim quia'
        },
        {
            name: 'Backpack Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 
            img: 'https://image.freepik.com/free-photo/backpack-binoculars-gravel_23-2147833112.jpg',
            price: 329000,
            discPrice:0,
            cb: true,
            grosir: false,
            rating: 4.5,
            reviews: 77,
            sold: 272,
            stock: 324,
            category: 'Bag',
            brand: 'MyBag',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, temporibus! Iure repudiandae, iusto cum facilis sunt sapiente odit nostrum atque nam consequatur unde sed quidem hic dolorum. Consequatur, enim quia'
        },
        {
            name: 'Painting Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 
            img: 'https://image.freepik.com/free-photo/ink-circular-sketch-clouds-ship_1417-250.jpg',
            price: 1249000,
            discPrice:0,
            cb: false,
            grosir: true,
            rating: 4.5,
            reviews: 77,
            sold: 272,
            stock: 324,
            category: 'Picture',
            brand: 'MyPicture',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, temporibus! Iure repudiandae, iusto cum facilis sunt sapiente odit nostrum atque nam consequatur unde sed quidem hic dolorum. Consequatur, enim quia'
        },
        {
            name: 'Glasses Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 
            img: 'https://img.freepik.com/free-photo/glasses-eye-chart-white-background_1387-278.jpg?size=626&ext=jpg',
            price: 320000,
            discPrice:0,
            cb: false,
            grosir: false,
            rating: 4.5,
            reviews: 77,
            sold: 272,
            stock: 324,
            category: 'Accesorries',
            brand: 'MyGlasses',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, temporibus! Iure repudiandae, iusto cum facilis sunt sapiente odit nostrum atque nam consequatur unde sed quidem hic dolorum. Consequatur, enim quia'
        },
        {
            name: 'Macbook Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 
            img: 'https://image.freepik.com/free-photo/desk-gadgets_181624-23300.jpg',
            price: 15959000,
            discPrice:0,
            cb: false,
            grosir: false,
            rating: 4.5,
            reviews: 77,
            sold: 272,
            stock: 324,
            category: 'Electronic',
            brand: 'Apple',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, temporibus! Iure repudiandae, iusto cum facilis sunt sapiente odit nostrum atque nam consequatur unde sed quidem hic dolorum. Consequatur, enim quia'
        },
        {
            name: 'Camera Lorem ipsum dolor sit amet consectetur adipisicing elit. ', 
            img: 'https://image.freepik.com/free-photo/small-film-cartridges-amidst-cameras_23-2147852436.jpg',
            price: 899000,
            discPrice:0,
            cb: false,
            grosir: false,
            rating: 4.5,
            reviews: 77,
            sold: 272,
            stock: 0,
            category: 'Electronic',
            brand: 'Canon',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, temporibus! Iure repudiandae, iusto cum facilis sunt sapiente odit nostrum atque nam consequatur unde sed quidem hic dolorum. Consequatur, enim quia'
        },
    ]
}

export default data