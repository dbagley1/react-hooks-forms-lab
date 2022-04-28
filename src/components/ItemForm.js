import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [addInput, setAddInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Produce');

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);

    const newItem = {
      id: uuid(),
      name: addInput,
      category: selectedCategory
    };

    props.onItemFormSubmit(newItem);
  }

  function handleInputChange(event) {
    setAddInput(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={addInput} onChange={handleInputChange} />
      </label>

      <label>
        Category:
        <select name="category" value={selectedCategory} onChange={handleSelectChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
