import nextId from "react-id-generator";



const data  = {
    goods:[
        {name:'Solimo Coffee Beans 2 kg', price:10.73, country:'Columbia' ,photo:'solimoCoffe', best:true, key:nextId().slice(2)},
        {name:'Presto Coffee Beans 1 kg', price:15.99,country:'Kenya', photo:'prestoCoffee', best:true, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'Zambia', photo:'aromisticoCoffee', best:true, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'Brazil', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'Kenya', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO test Coffee 1 kg', price:6.59, country:'Columbia', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:16.78, country:'Umpalumpia', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:6.99, country:'India', best:false, key:nextId().slice(2)},
        {name:'AROMISTICO Coffee 1 kg', price:7.99, country:'Peru', best:false, key:nextId().slice(2)},
    ]
}
export default data