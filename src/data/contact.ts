import { BiPhoneCall } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

export const contactDetails = [
  {
    icon: GrLocation,
    title: "Store Address",
    link: "https://goo.gl/maps/grGJeouP5XLK14j59",
    content: "23 22nd St - Al Quoz - Dubai - UAE",
    type: "link",
  },
  {
    icon: BiPhoneCall,
    title: "Hotline",
    link: "tel:+971505974495",
    content: "+971 50 597 4495",
    type: "link",
  },
  {
    icon: MdOutlineEmail,
    title: "Email Us",
    link: "mailto:cs@avenue39.com",
    content: "cs@avenue39.com",
    type: "link",
  },
  {
    icon: FaRegClock,
    title: "Service Time",
    content: "Timing: 9.00am to 11.00pm",
    type: "text",
  },
];
