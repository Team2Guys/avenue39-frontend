"use client";
const QuantitySelector = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Minus button */}
      <button
        onClick={decrease}
        className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-xl"
      >
        -
      </button>

      {/* Quantity display */}
      <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded text-lg font-bold">
        {quantity}
      </div>

      {/* Plus button */}
      <button
        onClick={increase}
        className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-xl"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
