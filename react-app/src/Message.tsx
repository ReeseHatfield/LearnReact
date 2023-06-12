function Message(){
    //PascalCase function components


    const name: string = `Reese`
    //JSX = JS XML
    // lets you do html inside js
    if(name){
        return <h1>Hello {name}</h1>;
    }
    else{
        return <h1>Hello World</h1>
    }

}

export default Message;