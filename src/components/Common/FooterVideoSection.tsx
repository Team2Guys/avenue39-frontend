import Image from "next/image"

const FooterVideoSection = () => {
    return (
        <div className="py-10 grid grid-cols-2">
            <div className="relative h-60">
                <Image src='/assets/images/bin/videoImg.webp' alt="" fill className="object-cover" />
            </div>
            <div className="bg-black text-white flex justify-center items-center flex-col gap-4">
                <h4 className="font-alethiaLight text-2xl font-bold">Lorem Ipsum is simply dummy text </h4>
                <p className="font-alethiaLight max-w-[320px] text-center">is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                    been the industry's.</p>
            </div>
        </div>
    )
}

export default FooterVideoSection