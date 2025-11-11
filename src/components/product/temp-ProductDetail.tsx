"use client";
import Image from "next/image";
import PaymentMethod from "../ui/payment";
import Thumbnail from "./thumbnail";
import { MdOutlineInfo } from "react-icons/md";

import Dollar from "../svgs/dollar";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import ProductSlider from "./ProductSlider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";

const productData = {
  name: "Sapori DinAing Table (d:130 cm)",
  regularPrice: "3400",
  memberPrice: "2400",
  productImages: [
    {
      imageUrl: "/assets/images/bin/product-detail/sapori_1.webp",
      public_id: "product/table-main-001",
      altText: "Round marble dining table with bronze base",
    },
    {
      imageUrl: "/assets/images/bin/product-detail/sapori_2.webp",
      public_id: "product/table-closeup-002",
      altText: "Close-up of marble tabletop texture",
    },
    {
      imageUrl: "/assets/images/bin/product-detail/sapori_3.webp",
      public_id: "product/table-room-view-003",
      altText: "Dining table setup with chairs in living room",
    },
    {
      imageUrl: "/assets/images/bin/product-detail/sapori_4.webp",
      public_id: "product/table-room-view-003",
      altText: "Dining table setup with chairs in living room",
    },
  ],
  description:
    "The Sapori Dining Table is an exquisite blend of luxury and functionality, featuring a 130 cm diameter top that provides ample space for dining while making a bold style statement. The elegant sintered stone surface adds a touch of sophistication, complemented by a sleek revolving top for added convenience during meals. Its sturdy, sculptural base boasts a brushed metallic finish, combining strength with an artistic flair. Perfect for intimate gatherings or family dinners, the Sapori Dining Table is designed to elevate the ambiance of any dining space with its modern elegance and practical design.",
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="container mx-auto my-10 flex gap-16">
      <div className="w-[55%]">
        <Thumbnail images={productData.productImages} />
      </div>
      <div className="w-[45%]">
        <div className="w-fit">
          <h1 className="font-alethia font-semibold text-[32px]">{productData.name}</h1>
          <div className="space-y-1 my-4">
            <p className="font-alethia font-bold text-2xl flex items-center gap-1">
              <Dollar className="w-8 h-8" />
              {productData.regularPrice} Regular
            </p>
            <div className="flex justify-between gap-2 items-center">
              <p className="font-alethia font-bold text-2xl flex items-center gap-1">
                <Dollar className="w-8 h-8" />
                {productData.memberPrice} Member
              </p>
              <p className="text-[13px] font-alethia font-normal flex items-center gap-2">
                <span>Save £149 for £100 per year</span> <MdOutlineInfo />
              </p>
            </div>
          </div>
        </div>
        <PaymentMethod installments={Number(productData.regularPrice) / 4} />
        <div className="mt-4 overflow-hidden border-b border-gray-200">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex items-center gap-1 text-xs font-bold font-alethia">
                  <Image
                    src="/assets/icons/description.png"
                    alt="Description Icon"
                    width={16}
                    height={16}
                  />{" "}
                  Description
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[13px] font-alethiaLight">
                <p>{productData.description}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="flex items-center gap-1 text-xs font-bold font-alethia">
                  <Image
                    src="/assets/icons/dimension.png"
                    alt="Dimensions Icon"
                    width={16}
                    height={16}
                  />
                  Dimensions
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis
                  illo iusto ipsum voluptatum hic corporis maiores dolores. Officia ipsam sint ex
                  doloremque laudantium consequatur fuga excepturi voluptatum consectetur quod.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <span className="flex items-center gap-1 text-xs font-bold font-alethia">
                  <Image
                    src="/assets/icons/material.png"
                    alt="Delivery Icon"
                    width={16}
                    height={16}
                  />
                  Material
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque
                  consequuntur beatae perferendis, harum voluptatibus nisi quos at nostrum saepe,
                  aperiam nemo voluptas earum a ut facere illo maiores non.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <span className="flex items-center gap-1 text-xs font-bold font-alethia">
                  <Image
                    src="/assets/icons/shippingDelivery.png"
                    alt="Delivery Icon"
                    width={16}
                    height={16}
                  />
                  Shipping Details
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sunt natus
                  nulla, est nisi quos doloribus iure in itaque ipsam. Sunt facilis qui, at
                  provident dolore illum fugiat dolores suscipit.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <span className="flex items-center gap-1 text-xs font-bold font-alethia">
                  <Image
                    src="/assets/icons/returnPolicy.png"
                    alt="return Icon"
                    width={16}
                    height={16}
                  />
                  Return Policy
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day return policy. If
                  you&apos;re not completely satisfied, simply return the item in its original
                  condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping and full refunds
                  processed within 48 hours of receiving the returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-4 space-y-6">
          <p className="flex items-start gap-1 font-alethiaLight text-xs">
            <Image src="/assets/icons/InStock.png" alt="In Stock Icon" width={12} height={12} />
            In Stock
          </p>
          <p className="flex items-start gap-4 text-xs font-bold font-alethia">
            Colors
            <div className="flex items-center gap-4">
              <span
                className="rounded-full w-[21px] h-[21px] border border-black"
                style={{ background: "#D9D9D9" }}
              ></span>
              <span
                className="rounded-full w-[21px] h-[21px]"
                style={{ background: "#B87D45" }}
              ></span>
              <span
                className="rounded-full w-[21px] h-[21px]"
                style={{ background: "#765333" }}
              ></span>
            </div>
          </p>
          <p className="flex flex-col gap-4 text-xs font-bold font-alethia">
            Quantity
            <div>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>
          </p>
          <button className="flex justify-center items-center gap-2 w-full h-12 bg-black text-white font-alethiaLight">
            <Image src="/assets/icons/addToCart.png" alt="addToCart Icon" width={18} height={15} />{" "}
            Add to cart <span className="font-bold font-alethia">- Dhs. 4,500</span>
          </button>
          <div className="flex flex-col gap-4 text-xs font-bold font-alethia">
            Match With
            <ProductSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
