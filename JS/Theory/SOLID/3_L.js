// Liskov Substitution Principle

// class Person {
    
// }

// class Member extends Person {
//     access() {
//         console.log('You have access');
//     }
// }

// class Guest extends Person {
//     isGuest = true
// }
// class Frontend extends Member {
//     canCreateFrontend() {}
// }


// class Backend extends Member {
//     canCreateBackend() {}
// }

// class PersonFromDifferentCompany extends Person {
//     access() {
//         throw new Error('You have no access! Go away!')
//     }
// }

// function openSecretDoor(member){
//     member.access()
// }

// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // There should be Member

class Component {
    isComponent = true
}
class ComponentWidthTemplate {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component{

}
class HeaderComponent extends ComponentWidthTemplate {
    onInit() {}
}


class FooterComponent extends ComponentWidthTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }
    wrapComponent(component){
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())