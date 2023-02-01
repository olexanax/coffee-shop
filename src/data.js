import nextId from "react-id-generator";



const data  = {
    goods:[
        {name:'Solimo Coffee Beans 2 kg', price:10.73, country:'Columbia', photo:'', best:true, key:nextId().slice(2)},
        {name:'Presto Coffee Beans 1 kg', price:15.99,country:'Kenya', photo:'https://m.media-amazon.com/images/I/51EbEFx9PyL._AC_SL1000_.jpg', best:true, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'Zambia', photo:'https://m.media-amazon.com/images/I/51EbEFx9PyL._AC_SL1000_.jpg', best:true, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'Brazil', photo:'https://m.media-amazon.com/images/I/51EbEFx9PyL._AC_SL1000_.jpg', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'Columbia', photo:'', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.59, country:'Columbia', photo:'https://m.media-amazon.com/images/I/51EbEFx9PyL._AC_SL1000_.jpg', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:16.78, country:'Kenya', photo:'https://m.media-amazon.com/images/I/51EbEFx9PyL._AC_SL1000_.jpg', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'Brazil', photo:'https://m.media-amazon.com/images/I/51EbEFx9PyL._AC_SL1000_.jpg', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:7.99, country:'Kenya', photo:'https://m.media-amazon.com/images/I/51EbEFx9PyL._AC_SL1000_.jpg', best:false, key:nextId().slice(2)},
    ]
}
export default data