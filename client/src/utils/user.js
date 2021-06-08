export default class User {

    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    updateNameAndEmail(props,name,email){
        localStorage.setItem("user", JSON.stringify({name,email}));
        props.dispatch({type:'EDIT_USER', payload:{name,email}}) 
    }
}