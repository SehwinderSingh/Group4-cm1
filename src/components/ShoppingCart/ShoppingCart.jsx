import { useState } from "react";
import "./ShoppingCart.css";
import Item from "./Item";

function ShoppingCart() {
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    quantity: "",
    subtotal: "",
    tax: "",
    availability: "In stock",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Date.now(),
      name: form.name,
      brand: form.brand,
      quantity: Number(form.quantity),
      subtotal: Number(form.subtotal),
      tax: Number(form.tax),
      availability: form.availability,
    };

    setItems([...items, newItem]);

    setForm({
      name: "",
      brand: "",
      quantity: "",
      subtotal: "",
      tax: "",
      availability: "In stock",
    });
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      <form onSubmit={handleSubmit} className="cart-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Enter brand"
            required
          />
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            min="1"
            placeholder="Enter quantity"
            required
          />
        </div>

        <div className="form-group">
          <label>Subtotal (€)</label>
          <input
            type="number"
            name="subtotal"
            value={form.subtotal}
            onChange={handleChange}
            min="0"
            step="0.01"
            placeholder="0.00"
            required
          />
        </div>

        <div className="form-group">
          <label>Tax (€)</label>
          <input
            type="number"
            name="tax"
            value={form.tax}
            onChange={handleChange}
            min="0"
            step="0.01"
            placeholder="0.00"
            required
          />
        </div>

        <div className="form-group">
          <label>Availability</label>
          <select
            name="availability"
            value={form.availability}
            onChange={handleChange}
          >
            <option value="In stock">In stock</option>
            <option value="Out of stock">Out of stock</option>
          </select>
        </div>

        <button type="submit">Add to Cart</button>
      </form>

      <h3>Cart Items</h3>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
