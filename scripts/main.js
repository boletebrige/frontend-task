Vue.use(VueSmoothScroll)
var app = new Vue({
    el: '#app',
    data: {
        active: '',
        // device images according to selected color
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
        // array of phone images for selected phone color
        images: [],
        // user comments array
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
        ],
        selectedColor: null,
        // default selected phone storage
        selectedStorage: 64,
        // available phone storage with price
        phoneStorage: [
            { storage: 64, price: 1799 },
            { storage: 128, price: 2799 },
            { storage: 256, price: 3799 }
        ],
        // array for selected equipment
        selectedEquipment: [],
        // default selected rate
        selectedRate: 100,
        // rate info for tooltip
        tooltipRate: [
            { rateId: '100', calls: 'Neograničeno poziva', sms: '200 SMS poruka', internet: '2GB interneta' },
            { rateId: '500', calls: 'Neograničeno poziva', sms: '500 SMS poruka', internet: '5GB interneta'},
            { rateId: '1000', calls: 'Neograničeno poziva', sms: '1000 SMS poruka', internet: 'Neograničeno interneta'}
        ],
        // selected rate tooltip
        tooltipText: null,
        total: null,
        specifications: [
            { name: 'Prijenos podataka', value: 'GPRS, HSDPA 42.2, EDGE, LTE Cat11 600 Mbps DL, UMTS, HSUPA 5.76'},
            { name: 'OPERATIVNI SUSTAV', value: 'iOS'},
            { name: 'Verzija OS -a', value: '11'},
            { name: 'Povezivost', value: 'Bluetooth, Sinkronizacija s racunalom, USB kabel, WLAN, GPS' },
            { name: 'Zaslon', value: '5.5" FHD retina kapacitivni dodirni zaslon razlučivosti 1080 x 1920 piksela'},
            { name: 'Kamera', value: '12 Mpx'},
            { name: 'Dodatne značajke', value: '	Povećana otpornost na vodu i prašinu - IP67, dvostruka kamera 12MP, stereo zvučnici, najnapredniji A11 Bionic čip, bežično punjenje'},
            { name: 'Memorija telefona', value: 'Korisnička i sistemska memorija 64GB'},
            { name: 'Memorijska kartica - tip utora', value: 'ne podržava'},
            { name: 'Baterija - tip', value: 'Li-Ion'},
            { name: 'Baterija - kapacitet', value: '2675 mAh'},
            { name: 'Tip SIM kartice', value: 'Nano'}
        ]
    },
    methods: {
        // setting image from thumbnail
        activeImage(image){
            this.active = image;
        },
        // getting device images by selected color
        colorSelect(device){
            this.images = device.images;
            this.active = this.images[0].url;
            this.selectedColor = device.color;
            console.log(this.selectedColor);
        },
        // filling tooltip with selected rate info
        rateChange(){
            var that = this;
            var rateInfo = this.tooltipRate.filter(function(el){
                if(el.rateId == that.selectedRate ){
                    return el;
                }
            });
            this.tooltipText = rateInfo[0];
        },
        // callculating price by selected equipment, phone storage and rate
        priceCalc(){
            var that = this;
            var equipmetCost = 0;
            var tempPrice = this.phoneStorage.filter(function(el){
                if(el.storage == that.selectedStorage ){
                    return el;
                }
            });
            this.selectedEquipment.forEach(function(el){
                equipmetCost += Number(el);
            });
            this.total = equipmetCost + tempPrice[0].price - this.selectedRate;

        }
    },
    mounted(){
        this.active = this.devices[0].images[0].url;
        this.images = this.devices[0].images;
        this.selectedColor = this.devices[0].color;
        this.rateChange();
        this.priceCalc();
    }
})