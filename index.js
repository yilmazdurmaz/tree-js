document.body.innerHTML="Hello, please open Developer Tools , possibly F12" 

class Tree{
  root=null;
  constructor(value){
    if(value) {
      console.log("new tree with initial value");
      addValue(value)
    }else{
      console.log("empty tree started")
    }
  }
  addValue(value){
    let node=new Node(value);
    if(!this.root) {
      console.log("adding value");
      this.root=node;
      return;
    }else{
      console.log("adding node");
      this.root.addNode(node)
    }
  }
}

class Node{
  left=null;
  right=null;
  value;
  constructor(value){
    this.value=value;
  }
  addNode(node){
    //check left and add
    if(node.value< this.value){
      console.log("adding left");
      if(!this.left){
        this.left=node;
      }else{this.left.addNode(node)}
    }else{
      console.log("adding right");
      if(!this.right){
        this.right=node;
      }else{this.right.addNode(node)}
    }
  }
}


let n= new Node(5);
console.log(n);

let t = new Tree(3);
console.log(t)

let tree=new Tree();
tree.AddValue(5);
tree.AddValue(3);
tree.AddValue(6);
tree.AddValue(5);
tree.AddValue(7);
