export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  link?: string;
  icon?: string; 
}

export const roomsData = {
  LIVING: [
    {
      id: 1,
      title: "Munich Leather Hinge Chair",
      description:
        "360° swivel. Sleek steel base. Soft leather. Style and comfort in one.",
      image: "/assets/images/home/munich.webp",
      buttonText: "Shop Now",
      link: "/shop",
    },
    {
      id: 2,
      title: "Florento Floor Lamp",
      description: "Marble base, shelf, warm glow ready to plug in.",
      image: "/assets/images/home/Lamp.webp",
      buttonText: "Shop Now",
      link: "/shop",
    },
    {
      id: 3,
      title: "Gerona Coffee Table and Side Table",
      description:
        "Bold circular design with tinted glass top and sturdy base for modern elegance.",
      image: "/assets/images/home/garona.webp",
      buttonText: "Shop Now",
      link: "/shop",
      
    },
    {
      id: 4,
      title: "Gerona Coffee Table and Side Table",
      description:
        "Bold circular design with tinted glass top and sturdy base for modern elegance.",
      image: "/assets/images/home/garona.webp",
      buttonText: "Shop Now",
      link: "/shop",
      
    },
     {
      id: 5,
      title: "Gerona Coffee Table and Side Table",
      description:
        "Bold circular design with tinted glass top and sturdy base for modern elegance.",
      image: "/assets/images/home/garona.webp",
      buttonText: "Shop Now",
      link: "/shop",
      
    },
     {
      id: 6,
      title: "Gerona Coffee Table and Side Table",
      description:
        "Bold circular design with tinted glass top and sturdy base for modern elegance.",
      image: "/assets/images/home/garona.webp",
      buttonText: "Shop Now",
      link: "/shop",
      
    },
  ],

  DINING: [
    {
      id: 1,
      title: "Dining Chair",
      description: "Elegant and sturdy for family dinners.",
      image: "/assets/images/home/munich.webp",
      buttonText: "Shop Now",
      link: "/shop",
    },
    {
      id: 2,
      title: "Wooden Dining Table Set",
      description: "Premium wood table with matching chairs for cozy meals.",
      image: "/assets/images/home/dining-table.webp",
      buttonText: "Shop Now",
      link: "/shop",
    },
  ],

  BEDROOM: [
    {
      id: 1,
      title: "Aurora Bed Frame",
      description:
        "Modern bed frame with soft-touch upholstery and durable build.",
      image: "/assets/images/home/bedroom1.webp",
      buttonText: "Shop Now",
      link: "/shop",
    },
  ],

  "HOME OFFICE": [
    {
      id: 1,
      title: "Ergonomic Office Chair",
      description: "Perfect comfort for long working hours.",
      image: "/assets/images/home/office-chair.webp",
      buttonText: "Shop Now",
      link: "/shop",
    },
  ],
};
