document.body.innerHTML="Hello, please open Developer Tools , possibly F12" 

let n= new Node(5);
console.log(n);
class Tree{
  let root=null;
  constructor(val){
    addNode(new Node(val));
  }
  addNode(node){
    if(!this.root) {
      console.log("adding node);
      this.root=node;
      return;
    }
    if(this.root.val<node.val){
      console.log("adding left");
      this.root.left=node;
    }else{
      console.log("adding right");
      this.right=new Node(node);
    }
  }
}

class Node{
  let left=null;
  let right=null;
  let value;
  constructor(value){
    this.value=value;
  }

}
