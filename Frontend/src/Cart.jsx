import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ productId }));
    toast.error("Item removed from cart!", { position: "top-right" });
  };

  return (
    <div className="mb-5 mt-5">
      <ToastContainer />
      <h1 className="d-flex justify-content-center fw-bold text-light bg-dark shadow">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="d-flex justify-content-center mt-5">
          <h1>&#128557; Your cart is empty. &#128557;</h1>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.productId} className="container my-3">
              <div className="row align-items-center border p-3 bg-light shadow">
                <div className="col-sm-12 col-lg-5 text-center">
                  <img src={item.img} alt={item.name} className="w-75" />
                </div>
                <div className="col-sm-12 col-lg-5">
                  <h3 className="mt-3 fw-bold">Item Name: {item.name}</h3>
                  <h3 className="mt-3 mb-3 fw-bold">Quantity: {item.quantity}</h3>
                  <h4 className="mt-2 h3 fw-bold">Price: RS {item.price * item.quantity}</h4>
                  <button
                    className="btn btn-warning mt-3 w-100"
                    onClick={() => handleRemove(item.productId)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="container text-center mt-4">
            <h2 className="bg-dark text-light p-3">Total Price: RS {totalPrice}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
