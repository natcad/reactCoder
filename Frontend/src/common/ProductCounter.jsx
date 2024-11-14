import { useState } from "react";

const ProductCounter = ({stock, setQuantity}) => {
  const [count, setCount] = useState(1);
  
  const increment=()=>{
    if(count < stock){
        setCount(count+1);
        setQuantity(count+1)
    }
  };

  const decrement = ()=>{
    if (count>1){
        setCount(count-1)
        setQuantity(count+1)
    }
  };
  const handleChange = (e) => {
    const value = Math.max(1, Math.min(stock, Number(e.target.value)));
    setCount(value);
    setQuantity(value)

  };
  return (
    <div className="product-counter">
      <button onClick={decrement} disabled={count === 1}>-</button>

      <input
        type="number"
        value={count}
        onChange={handleChange}
        min="1"
        max={stock}
        className="product-counter-input"
      />
      <button onClick={increment} disabled={count === stock}>
        +
      </button>
    </div>
  );
};
export default ProductCounter;
