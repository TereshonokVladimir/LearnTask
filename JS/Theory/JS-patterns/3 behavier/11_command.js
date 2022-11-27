class MyMath {
    constructor(initiqalValue = 0) {
        this.num = initiqalValue
    }

    square(){
        return this.num ** 2
    }
    kube(){
        return this.num ** 3
    }
}

class Command {
    constructor(subject){
        this.subject = subject
        this.commandExecuted = []
    }

    execute(command){
        this.commandExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'));
console.log(x.execute('cube'));

console.log(x.commandExecuted);

