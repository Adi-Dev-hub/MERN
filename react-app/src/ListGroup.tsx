import { MouseEvent } from "react";
function ListGroup() {
  let items = ["London", "Paris", "Mumbai", "Jaipur", "New York"];
  let selectedIndex = 0;
  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={selectedIndex === index ? "list-group-item active"}
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
