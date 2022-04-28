import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList(props) {
  const items = props.items;
  // console.log(items);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchInput(val) {
    setSearchInput(val);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    return !!(item.name.match(new RegExp(searchInput, 'i')));
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={props.onItemFormSubmit} />
      <Filter search={searchInput} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchInput} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
