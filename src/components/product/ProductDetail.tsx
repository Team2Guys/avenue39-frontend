import Thumbnail from "./thumbnail"

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
    ]

}

const ProductDetail = () => {
    return (
        <div className="my-10 flex gap-20">
            <div className="w-[55%]">
                <Thumbnail images={productData.productImages} />
            </div>
            <div className="w-[45%]">
                <h1 className="font-alethia font-semibold text-[32px]">{productData.name}</h1>
                <p className="font-alethia font-bold text-2xl">{productData.regularPrice} Regular</p>
                <div className="flex justify-between gap-2 items-center">
                    <p className="font-alethia font-bold text-2xl">{productData.memberPrice} Member</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail