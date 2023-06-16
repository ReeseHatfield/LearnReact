import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import PasswordField from "./components/PasswordField/PasswordField";

function App(){

    const items : string[] =[
        'Paris',
        'Tokyo',
        'Chillicothe',
        'Fairborn'
    ]

    const header: string = 'Cities'

    return<div>
        <ListGroup
            header={header}
            listItems={items}
        ></ListGroup>

        <Button></Button>
        <PasswordField></PasswordField>
    </div>;
}

export default App;