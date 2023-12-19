class Product{
    constructor(title,description,price,thumbnail,code,stock,id){
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock=stock;
        this.productId=1;
        
    }
    addProduct(product){
        product.id=this.productId++;
        this.products.push(product);
    }
    getproduct=()=>{
        return this.product
    }
    getProductById(productId) {
        return this.products.find((p) => p.id === productId);
      }
}
let cervezaImperial = new Product();
cervezaImperial.addProduct({
    title:"cerveza Imperial",
    description:"Cerveza Imperial rubia de litro",
    price: 1400,
    Thumbnail:"https://www.bing.com/images/search?view=detailV2&ccid=A9wVk4Ix&id=F9E95BE8A7D1F3EF0A19CF7725C9A3D7F43685BC&thid=OIP.A9wVk4Ix4rdoRsD6d8q5AAHaHa&mediaurl=https%3a%2f%2fjumboargentina.vtexassets.com%2farquivos%2fids%2f579395-800-auto%3fv%3d637215672469500000%26width%3d800%26height%3dauto%26aspect%3dtrue&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.03dc15938231e2b76846c0fa77cab900%3frik%3dvIU29NejySV3zw%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=cerveza+imperial+rubia+de+litro&simid=608001798739657774&FORM=IRPRST&ck=A0E608B8F27D5B39F8AD4143AA521AA5&selectedIndex=10&itb=0&ajaxhist=0&ajaxserp=0",
    code:48521,
    stock: 24,
})
let cervezaQuilmesIpa = new Product();
cervezaImperial.addProduct({
    title:"cerveza Quilmes IPA",
    description:"Cerveza Quilmes IPA de litro",
    price: 1600,
    Thumbnail:"https://www.bing.com/images/search?view=detailV2&ccid=PQI0mf62&id=9A6FC1D150233ABC603E5D6B8FC6C6FF53FB8CAC&thid=OIP.PQI0mf629sTifo72v4_qrQHaHa&mediaurl=https%3a%2f%2fjumboargentina.vtexassets.com%2farquivos%2fids%2f786357%2fCerveza-Quilmes-Ipa-Retornable-1lt-1-971974.jpg%3fv%3d638234014253900000&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3d023499feb6f6c4e27e8ef6bf8feaad%3frik%3drIz7U%252f%252fGxo9rXQ%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1000&q=cerveza+quilmes+ipa&simid=607994686273776868&FORM=IRPRST&ck=2F7FA89CA341C9C06EEEDFEEA59060CB&selectedIndex=2&itb=0&ajaxhist=0&ajaxserp=0",
    code:48522,
    stock: 24,
})

console.log(cervezaImperial.getProductById())

