"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Summary = ({ cartData }: { cartData: any }) => {
  const router = useRouter();
  return (
    <div className="flex-1">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-4 border border-gray-200 bg-white shadow-sm">
        <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">__</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Shipping</dt>
            <dd className="text-sm font-medium text-gray-900"> $2</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Taxes</dt>
            <dd className="text-sm font-medium text-gray-900"> 0</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium">Total</dt>
            <dd className="text-base font-medium text-gray-900">
              ${cartData.carts[0].total}
            </dd>
          </div>
        </dl>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <button
            onClick={() => router.push("/checkout")}
            type="submit"
            className="hidden md:block w-full border border-transparent bg-primary px-4 py-3 text-base font-medium text-black shadow-md uppercase disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
