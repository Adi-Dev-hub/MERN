import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  let items = ["India", "USA", "Canada", "Australia", "Germany"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="App">
      <ListGroup
        items={items}
        heading=" Cites"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>world</span>
      </Alert>
      <Button />
    </div>
  );
}
export default App;
