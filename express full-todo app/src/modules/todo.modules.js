class Tmodule{
   id;
   text;
   isDelete;
   constructor(id,text ,isDelete=false){
      this.id =id,
    this.text = text,
    this.isDelete =isDelete
   }

}

module.exports={Tmodule}