import { useState } from "react";

export default function ProductCard({ product }) {
  let [currentImageIndex, currentImageIndexFunction] = useState(0);
  let [showDescriptions, showDescriptionsFunction] = useState(false);
  let [itemsInCart, itemsInCartFunction] = useState(0);

  const handleAddToCartClick = () => {
    itemsInCartFunction((itemsInCart += 1));
    alert(`You have ${itemsInCart} added to you cart `);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <br />
        <button
          onClick={() => currentImageIndexFunction((currentImageIndex += 1))}
          disabled={currentImageIndex >= product.imageUrls.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => currentImageIndexFunction((currentImageIndex -= 1))}
          disabled={currentImageIndex <= 0}
        >
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>{showDescriptions ? product.description : ""}</p>
      <button onClick={() => showDescriptionsFunction(!showDescriptions)}>
        {showDescriptions ? "Hide" : "Show"} Description
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>
      <span>Items in the cart :: {itemsInCart}</span>
      <br />
      {!product.isInStock && "The product is out of stock"}
      <br />
    </>
  );
}
