export default{
    'product-list':{
        template:'#product-list-template',
          data(){
            return{
              number: 0,
              message: 'Hello World',
              product_id: 0,
              tempdata: {
                category: '',
                name: '',
                oprice: '',
                price: '',
                unit: '',
                content: '',
                imgurl: '',
                hotstar: 0,
                enabled: 0,
            },
              productlist:[
                {
                  category: '掌上主機',
                  name: 'Switch',
                  oprice: 20000,
                  price: 25555,
                  unit: '杯',
                  content: '無內容',
                  imgurl: 'https://picsum.photos/500/400?random=2',
                  hotstar: 0,
                  enabled: 1,
                }
            ]
          }},
          methods:{
            getListIndex (key) {
                this.index = key;
            },
            createnewProductModal () {
              this.tempdata = Object.assign({},{
                category: '',
                name: '',
                oprice: '',
                price: '',
                activated: '',
                unit: '',
                content: '',
                imgurl: '',
                hotstar: 0,
                enabled: 0,});
              console.log( this.tempdata);
            },
            PushProductList () {
              this.productlist.push( this.tempdata );
              console.log(this.prodcutlist[(this.productlist.length-1)])
            },
            editProduct (key) {
              this.product_id = key;
              console.log( this.product_id);
              this.tempdata = Object.assign({},this.productlist[this.product_id]);
              console.log(this.tempdata);
              console.log(this.productlist);
            },
            updatedEditProduct() {
              this.productlist[this.product_id] = this.tempdata;
              this.tempdata={};
            },
            deleteProduct(key) {
              this.productlist
            }
          }   
            }//productlist end tag
}