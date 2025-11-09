import Image from "next/image"
import PaymentMethod from "../ui/payment"
import Thumbnail from "./thumbnail"
import { MdOutlineInfo } from "react-icons/md"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import Dollar from "../Svgs/dollar"

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
    description:'The Sapori Dining Table is an exquisite blend of luxury and functionality, featuring a 130 cm diameter top that provides ample space for dining while making a bold style statement. The elegant sintered stone surface adds a touch of sophistication, complemented by a sleek revolving top for added convenience during meals. Its sturdy, sculptural base boasts a brushed metallic finish, combining strength with an artistic flair. Perfect for intimate gatherings or family dinners, the Sapori Dining Table is designed to elevate the ambiance of any dining space with its modern elegance and practical design.',

}

const ProductDetail = () => {
    return (
        <div className="container mx-auto my-10 flex gap-16">
            <div className="w-[55%]">
                <Thumbnail images={productData.productImages} />
            </div>
            <div className="w-[45%]">
                <div className="w-fit">
                    <h1 className="font-alethia font-semibold text-[32px]">{productData.name}</h1>
                    <div className="space-y-1 my-4">
                        <p className="font-alethia font-bold text-2xl flex items-center gap-1"><Dollar className="w-6 h-6" />{productData.regularPrice} Regular</p>
                        <div className="flex justify-between gap-2 items-center">
                            <p className="font-alethia font-bold text-2xl flex items-center gap-1"><Dollar className="w-6 h-6" />{productData.memberPrice} Member</p>
                            <p className="text-[13px] font-alethia font-normal flex items-center gap-2"><span>Save £149 for £100 per year</span> <MdOutlineInfo /></p>
                        </div>
                    </div>
                </div>
                <PaymentMethod installments={Number(productData.regularPrice) / 4} />
                <div className="mt-4 overflow-hidden">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger><span className="flex items-center gap-1 text-xs font-bold font-alethia"><Image src='/assets/icons/description.png' alt="Description Icon" width={16} height={16} /> Description</span></AccordionTrigger>
                            <AccordionContent className="text-[13px] font-extralight font-alethia">
                                <p>{productData.description}</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Shipping Details</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We offer worldwide shipping through trusted courier partners.
                                    Standard delivery takes 3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                </p>
                                <p>
                                    All orders are carefully packaged and fully insured. Track your
                                    shipment in real-time through our dedicated tracking portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Return Policy</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We stand behind our products with a comprehensive 30-day return
                                    policy. If you&apos;re not completely satisfied, simply return the
                                    item in its original condition.
                                </p>
                                <p>
                                    Our hassle-free return process includes free return shipping and
                                    full refunds processed within 48 hours of receiving the returned
                                    item.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail