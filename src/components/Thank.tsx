import Thankyou from "./svgs/thankyou"
import Button from "./common/CommonButton"

export const Thank = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-10 space-y-4">
    <Thankyou/>
    <h2 className="font-alethia font-extralight text-[22px] lg:text-[54px]">Thank you for your order !</h2>
    <p className="font-alethia text-[14px] lg:text-[16px]">Your order is complete. Please check your email  for the details</p>
    <p className="font-alethia font-light text-[22px] lg:text-[37px]">Order Id#573700</p>
     <Button
      href="/shop"
      text="Continue Shopping"
      className="bg-black text-white w-[30%] lg:w-[18%] text-[14px] lg:text-[16px]"
      />
    </div>
  )
}

