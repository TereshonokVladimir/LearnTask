class SimpleMemberShip {
    constructor(name){
        this.name = name
        this.cost = 50
    }
}

class StandardMemberShip {
    constructor(name){
        this.name = name
        this.cost = 150
    }
}

class PremiumMemberShip {
    constructor(name){
        this.name = name
        this.cost = 500
    }
}

class MemberFactory{
    static list = {
        simple: SimpleMemberShip,
        standart: StandardMemberShip,
        premium: PremiumMemberShip
    }
    create(name, type = 'simple'){
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new MemberShip(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name}(${this.type}):${this.cost}`);
        }  
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Vladilen','simple'),
    factory.create('Elena','premium'),
    factory.create('Oleg','standard'),
    factory.create('Ivan','premium'),
    factory.create('Petr',),
]

members.forEach( m => {
    m.define()
})