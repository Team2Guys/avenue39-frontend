
import { informationData } from "@/data"
import Image from "next/image"

export const Information = () => {
  return (
    <div className="bg-background">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-6 items-center">
        <div className="space-y-4">
          <h2 className=" text-2xl sm:text-4xl font-light">Welcome to Avenue39</h2>
          {
            informationData.map((array, index) => (
              <p key={index} className="font-alethia font-light">
                {array.title}
              </p>
            ))
          }
        </div>
        <div className="relative h-[250px] md:h-[500px]">
          <Image src="/assets/images/About/Information.png" alt="Information" fill priority />
        </div>
      </div>
    </div>
  )
}