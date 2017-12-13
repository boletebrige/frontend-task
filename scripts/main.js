Vue.use(VueSmoothScroll)
var app = new Vue({
    el: '#app',
    data: {
        active: '',
        devices: [
            { 
                color: 'black',
                colorHex: '#000',
                images: [
                    { url: './images/iphone8-b-resized.png'},
                    { url: './images/iphone8-b-b-resized.png'},
                    { url: './images/iphone8-b-s-resized.png'}
                ]
            },
            { 
                color: 'white',
                colorHex: '#fff',
                images: [
                    { url: './images/iphone8-w-resized.png'},
                    { url: './images/iphone8-w-b-resized.png'},
                    { url: './images/iphone8-w-s-resized.png'}
                ]
            },
            { 
                color: 'gold',
                colorHex: '#f5e5da',
                images: [
                    { url: './images/iphone8-g-resized.png'},
                    { url: './images/iphone8-g-b-resized.png'},
                    { url: './images/iphone8-g-s-resized.png'}
                ]
            }
        ],
        images: [
            { url: './images/iphone8-b-resized.png'},
            { url: './images/iphone8-b-b-resized.png'},
            { url: './images/iphone8-b-s-resized.png'}
        ],
        comments: [
            { 
                userImage: './images/user-image.png',
                phoneRating: 5,
                commentTitle: 'Super mobitel, brz i pouzdan!',
                commentContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vero eius cum expedita libero laboriosam explicabo tempora mollitia, porro quos minima enim possimus labore, asperiores exercitationem aliquid accusamus deserunt voluptatum.'
            },
            { 
                userImage: './images/user-image.png',
                phoneRating: 5,
                commentTitle: 'Super mobitel, brz, pouzdan, lorem ipsum dolor sit amet adipisicing elit. Repellendus vero eius cum expedita',
                commentContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vero eius cum expedita libero laboriosam explicabo tempora mollitia.'
            },
            { 
                userImage: './images/user-image.png',
                phoneRating: 3,
                commentTitle: 'Super mobitel, brz i pouzdan!',
                commentContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            }
        ]
    },
    methods: {
        activeImage(image){
            this.active = image;
        },
        colorSelect(device){
            console.log(device);
            this.images = device.images;
            this.active = this.images[0].url;
        }
    },
    mounted(){
        this.active = this.devices[0].images[0].url;
        this.images = this.devices[0].images;
    }
})