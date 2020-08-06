export default{
    'pagination':{
        template: `<nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>`,
        data (){
            return{
                msg: 'hea',
            }}
        ,
        methods:{
          updatePage (page) {
            console.log(page);
            this.getdata(page);
          }
        },
        props:['pages'],
    }
};