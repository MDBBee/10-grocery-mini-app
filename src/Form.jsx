import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
