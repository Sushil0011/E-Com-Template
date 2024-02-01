"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
interface SidebarProps {
  selectedPriceRanges: number[];
  setSelectedPriceRanges: React.Dispatch<React.SetStateAction<number[]>>;
}
const Sidebar: React.FC<SidebarProps> = ({
  selectedPriceRanges,
  setSelectedPriceRanges,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const priceRangeLabels = ["$0 to $100", "$101 to $500", "$501 to $1000"];
  const handleCheckbox = (range: number) => {
    // const priceRangeValue = priceRangeLabels[range];

    const updatedRanges = selectedPriceRanges.includes(range)
      ? selectedPriceRanges.filter((prevRange) => prevRange !== range)
      : [...selectedPriceRanges, range];

    const queryParams = updatedRanges.map(
      (updatedRange) => priceRangeLabels[updatedRange]
    );
    const newQueryString =
      queryParams.length > 0 ? `?${queryParams.join(",")}` : "";

    router.push(pathname + newQueryString);

    setSelectedPriceRanges(updatedRanges);
  };
  return (
    <div>
      <div className="flex flex-col p-4 ">
        <h2 className="text-lg font-semibold mb-2">Price</h2>
        <div className="w-[120px] ">
          <div className="mb-4 flex gap-4">
            <input
              type="checkbox"
              checked={selectedPriceRanges.includes(0)}
              onChange={() => handleCheckbox(0)}
            />
            <label className="block text-sm font-medium text-gray-700">
              $0 to $100
            </label>
          </div>
          <div className="mb-4 flex gap-4">
            <input
              type="checkbox"
              checked={selectedPriceRanges.includes(1)}
              onChange={() => handleCheckbox(1)}
            />
            <label className="block text-sm font-medium text-gray-700">
              $101 to $500
            </label>
          </div>
          <div className="mb-4 flex gap-4">
            <input
              type="checkbox"
              checked={selectedPriceRanges.includes(2)}
              onChange={() => handleCheckbox(2)}
            />
            <label className="block text-sm font-medium text-gray-700">
              $501 to $1000
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
