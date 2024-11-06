const SingleItem = ({ item, updateItem }) => {
  console.log('singleItem:', item);

  const handleChange = (itemId) => {
    updateItem(itemId);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      <p
        style={{
          textDecoration: `${item.completed ? 'line-through' : 'none'}`,
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" type="button">
        delete
      </button>
    </div>
  );
};
export default SingleItem;
