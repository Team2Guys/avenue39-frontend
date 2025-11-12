import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";

const testimonials = [
  {
    name: "James Smith",
    time: "2 days ago",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/assets/images/About/profile.webp",
  },
  {
    name: "Sonia Heller Schulthess",
    time: "2 days ago",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/assets/images/About/profile.webp",
  },
  {
    name: "Jasper Truffino",
    time: "2 days ago",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/assets/images/About/profile.webp",
  },
  {
    name: "James Smith",
    time: "2 days ago",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/assets/images/About/profile.webp",
  },
  {
    name: "Sonia Heller Schulthess",
    time: "2 days ago",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/assets/images/About/profile.webp",
  },
  {
    name: "Jasper Truffino",
    time: "2 days ago",
    review:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/assets/images/About/profile.webp",
  },
];

export const Testimonial = () => {
  return (
    <div className="p-2 md:p-6 mt-10 mb-10 space-y-10">
      <div className="max-w-3xl mx-auto text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-light">What Our Customers Think About Us</h2>
        <p>
          Indulge in the height of luxury with our best-selling furniture
          <br />
          where unparalleled comfort meets timeless sophistication.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 items-stretch">
        <div
          className="space-y-3 col-span-12 md:col-span-10 max-h-[470px] overflow-y-auto pr-2
          scrollbar-thin scrollbar-thumb-black scrollbar-track-black hover:scrollbar-thumb-gray-500"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 space-y-3 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium text-xl">{item.name}</p>
                  <p className="text-xs">{item.time}</p>
                  <div className="flex gap-1 text-[#FFD800] mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <MdOutlineStarPurple500 size={22} key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base">{item.review}</p>
            </div>
          ))}
        </div>
        <div className="relative hidden md:block col-span-2 rounded-md overflow-hidden h-[470px]">
          <Image
            src="/assets/images/About/testimonial.webp"
            alt="Customer Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
            <h2 className="text-white font-light text-xl md:text-2xl">
              What Our Customers Think About Us
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
