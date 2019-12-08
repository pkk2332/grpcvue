<template>
  <div class="about">
    <input v-model="a" type="text">
    <input v-model="b" type="text">

    <span class="text-primary">
      {{result}}
    </span>
    <button @click="add()">Add</button>
        <button @click="multi()">Multi</button>
                <button @click="test()">Multi</button>

  <div class="card">
    <div :key="index" v-for="(i,index) in infos" class="card-body">
          <div class="">{{i.title}}/{{i.msg}}</div>
    </div>
  </div>
  </div>
</template>
<script>
import {AddServiceClient} from "../../api/person_grpc_web_pb"
import {Request,Response,More} from "../../api/person_pb"
export default {
data() {
  return {
    a:null,
    b:null,
    result:null,
    client:null,
    infos:[],
  }
},
methods: {
  test(){
     var req= new Request();
      // console.log(req)      // console.log(more);
      req.setA(this.a);
      req.setB(this.b);
     var stream= this.client.test(req,{});
     stream.on('data',(res)=>{
       this.infos.push(res.toObject())
     })
  },
  add(){
    var req= new Request();
      // console.log(req)      // console.log(more);
      req.setA(this.a);
      req.setB(this.b);
     this.client.add(req,{},(err,res)=>{
       if(err){
        //  console.log(err)
       }else{
        this.result=res.getResult()
       }
     })
  },
  multi(){
      var req= new Request();
      req.setA(this.a);
      req.setB(this.b);
    var test= this.client.multi(req,{})
     test.on('data',(res)=>{
       this.result=res.getResult()
     })
     test.on('end',(end)=>{
       console.log(end)
     })
  }
},
mounted() {
  this.client=new AddServiceClient('http://localhost:8000',null,null)
  // this.test();
},
}
</script>