import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import PasswordField from "./components/PasswordField/PasswordField";
import Alert from "./components/Alert/Alert";

function App() {
  const items: string[] = ["Paris", "Tokyo", "Chillicothe", "Fairborn"];

  const header: string = "Cities";

  const handleSelectItemEvent = (item: string) => {
    alert(item);
  };

  return (
    <div>
      <ListGroup
        header={header}
        listItems={items}
        onSelectItem={handleSelectItemEvent}
      ></ListGroup>

      <Button></Button>
      <Alert>
        <div>Hello World</div>
      </Alert>
      <PasswordField></PasswordField>
    </div>
  );
}

export default App;
