import SingleItem from './SingleItem';
import { nanoid } from 'nanoid';

const Items = ({ items, updateItem }) => {
  console.log(items);

  return (
    <div className="items">
      {items.map((i) => (
        <SingleItem item={i} key={nanoid()} updateItem={updateItem} />
      ))}
    </div>
  );
};
export default Items;
