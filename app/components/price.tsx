import React from "react";
const Price = ({
  price,
  specialPrice,
}: {
  price: number;
  specialPrice: number;
}) => {
  var roundedSpecialPrice = Math.round(specialPrice);
  var discount = Math.round(((price - roundedSpecialPrice) / price) * 100);

  return (
    <div className={`flex items-center gap-1 `}>
      <p className="font-medium text-gray-900">
        &#x20B9; {roundedSpecialPrice.toLocaleString("en")}
      </p>
      {roundedSpecialPrice < price ? (
        <div>
          <span className="line-through mr-1 text-xs text-gray-400">
            {price}
          </span>
          <span className="text-green-600 text-xs">{discount}% off</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Price;
