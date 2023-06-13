 class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    search(){
        const keyword=this.queryStr.keyword?{
            name:{
                $regex:this.queryStr.keyword,
                $options:"i",
            },

        }:{};
        this.query=this.query.find({...keyword});
        return this;
    }
    filter(){

        const queryCopy={...this.queryStr}//making copy //in javascript object is passed through refrence so if we do like queryCopy=this.queryStr then query will have ref. so if we change anything that will also get changed in queryStr.
        //Removing Some fields or category

        const removeFields=["keyword","page","limit"];
        removeFields.forEach((key)=>delete queryCopy[key]);
    }
 }

 module.exports=ApiFeatures