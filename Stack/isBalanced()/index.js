const Stack = require('./stack');

function isBalanced(exp){
    var myStack = new Stack();

    for(var i = 0; i < exp.length; i++){
        
        if(exp[i] == '}' || exp[i] == ')' || exp[i] == ']'){

            if(myStack.isEmpty()){
                return false;
            }
            let output = myStack.pop();
            if(((exp[i] == "}") && (output != "{")) || ((exp[i] == ")") && (output != "(")) || ((exp[i] == "]") && (exp[i] == "["))){
                return false;
            }

        } else {
            myStack.push(exp[i])
        }
    }
    if(myStack.isEmpty == false){
        return false;
    }
    return true;
}

var inputString = "{[()]}"
console.log(inputString)
console.log(isBalanced(inputString))

inputString = "{}[]"
console.log(inputString)
console.log(isBalanced(inputString))