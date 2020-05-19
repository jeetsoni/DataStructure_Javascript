const LinkedList = require('./LinkedList');
const Node = require('./Node');

function reverse(list){
    let previousNode = null;
    let currentNode = list.getHead();
    let nextNode = null;

    while(currentNode != null) {
        nextNode = currentNode.nextElement;
        currentNode.nextElement = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    list.setHead(previousNode);
}

let list = new LinkedList();

list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtHead(6);
list.insertAtHead(7);
list.insertAtHead(8);
list.printList();
reverse(list);
list.printList();