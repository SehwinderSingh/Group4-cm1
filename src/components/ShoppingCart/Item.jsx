function Item({ item, onDelete }) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Brand: {item.brand}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: €{item.subtotal}</p>
            <p>Tax: €{item.tax}</p>
            <p>Availability: {item.availability}</p>

            <button onClick={() => onDelete(item.id)}>
                Delete
            </button>
        </div>
    );
}

export default Item;