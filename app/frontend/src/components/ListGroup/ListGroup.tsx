/*
JSX = JavaScript XML
-> define what html to return
 */

/*
when you want to return multiple top level
html elements, wrap it in a div
or better, use a Fragment
even better, instead of
<Fragment></Fragment>, use <> </>
 */

/*
Cannot iterate with JSX
 */

//when rendering a list, each child in list should have a unique key
import { ReactComponentElement } from "react";
import { MouseEvent } from "react";

import { useState } from "react";

interface ListGroupProps {
  header: string;
  listItems: any;
  onSelectItem: (item: string) => void;
}

function ListGroup({ header, listItems, onSelectItem }: ListGroupProps) {
  //can also destructure props like function ListGroup({ header, listItems }: ListGroupProps)
  //to just use header and listItems directly

  const [selectedListItem, setSelectedListItem] = useState(-1);

  if (listItems.length === 0) {
    return (
      <>
        {header}
        <p>No cities found</p>
      </>
    );
  }

  const mapped_items = listItems.map((item: string, index: number) => {
    return (
      <li
        key={index}
        onClick={() => {
          // Use the state updating function instead of directly setting the variable
          setSelectedListItem(index);
          onSelectItem(item);
        }}
        className={determineClasses(selectedListItem, index)}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      {header}
      <ul className="list-group"> {mapped_items}</ul>
    </>
  );
}

function determineClasses(selected: number, index: number): string {
  let classes: string = "list-group-item";

  if (selected === index) {
    classes += " active";
  }

  return classes;
}

export default ListGroup;
