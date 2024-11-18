import Particles from "@/components/magicui/particles";

export const RGB = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full z-0'>
        <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#df2935"}
        refresh
        />

        <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#fdca40"}
        refresh
        />

        <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#8cd867"}
        refresh
        />
    </div>
  )
}

