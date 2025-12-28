import React from "react";
import Item from "./item";
const PackingList = ({ items, handleDeleteItem, handleToggleItem ,setItems}) => {
  const [isSortesd, setIsSorted] = React.useState("input");
  let sortedItems;
  if (isSortesd === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  } else if (isSortesd === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
          <select value={isSortesd} onChange={(e)=>setIsSorted(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">sort by Description</option>
          <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={()=>setItems([])}>Clear</button>
      </div>
      
    </div>
  );
};

export default PackingList;
