import SubHeading from "@/components/subHeading";

export default function SectionHeading({ subHeading, heading }) {
  return(
    <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
      <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

      <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
        <div className="w-11/12 md:w-8/12">
          {subHeading && (
            <SubHeading asChild>
              <h2 className="mb-3">{subHeading}</h2>
            </SubHeading>
          )}
          
          {heading && (
            <h3 className="text-[8vw]/[1] md:text-[5.75vw]/[1] font-display tracking-tight text-center">{heading}</h3>
          )}
        </div>
      </div>
    </div>
  )
}