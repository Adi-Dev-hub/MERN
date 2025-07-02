import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // optional callback function
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // hook this is a feature of react state hook
  return (
    <>
      <h1>{heading} </h1>
      {items.length === 0 ? <p>No items found</p> : null}
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
