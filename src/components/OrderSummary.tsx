"use client";
import Image from "next/image";
import React from "react";
import Dollar from "./Svgs/dollar";
import {OrderSummaryProps } from "@/types/home.type";

export const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  const totalItems = items.length;
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="flex justify-center items-center my-5 md:my-10">
    <div className="border border-gray-200 p-5 w-full max-w-[838px] bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium font-alethia lg:text-[28px] text-black">
          Order Summary{" "}
          <span className="text-[14px] text-red-500 font-normal">
            “Total {totalItems} {totalItems > 1 ? "items" : "item"}”
          </span>
        </h2>
        <button className="underline font-bold text-[18px] lg:text-[28px] text-black">Delivery</button>
      </div>

      {/* Scrollable List */}
      <div className="max-h-[200px] overflow-y-auto border-t border-gray-200 table-scrollbar">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-100 py-6 pr-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center sm:gap-1 text-[16px] font-bold font-alethia ">
                <p className="">
                  {item.name}
                </p>
                <p className="">{item.size}</p>
              </div>
            </div>
            <p className="flex gap-1 justify-center items-center text-[16px] font-extrabold">
            <Dollar/>{item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-4 border-t border-gray-200 pt-4">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <p className="text-[20px] font-alethia">Subtotal</p>
          <p className="flex justify-center items-center gap-1"><Dollar/>{totalPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between font-extrabold text-[20px] font-alethia">
          <p>Total Incl. VAT</p>
          <p>{totalPrice.toLocaleString()}</p>
        </div>
      </div>

      {/* Note */}
      <p className="text-[16px] mt-4 border-t pt-4">
        Expected delivery date is simply dummy text of the printing and
      </p>
    </div>
    </main>
  );
};

