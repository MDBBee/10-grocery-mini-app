import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItem = { name: item, completed: false, id: nanoid() };
    setItems([...items, newItem]);
  };

  const deleteItem = (itemId) => {
    console.log(itemId);
  };

  const updateItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }

      return item;
    });

    setItems(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </section>
  );
};
export default App;
