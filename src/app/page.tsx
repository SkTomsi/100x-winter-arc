import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col relative items-center justify-between min-h-screen py-10 bg-white">
      <div className="overflow-hidden size-[400px] object-contain rounded-3xl shadow-2xl">
        <Image
          src={IMAGES.splashScreen}
          alt="splash screen"
          className="h-full object-cover object-bottom"
        />
      </div>
      <div className="w-full text-2xl text-center text-zinc-900 font-extrabold px-10">
        Pov: you are about to start the greatest character development arc of
        your life.(this time its serious)
      </div>
      <Link href="/my-streak" className="w-fit">
        <Button
          className="rounded-full bg-white font-bold bg-primary w-fit text-md"
          size={"lg"}
        >
          Start your winter arc now!
        </Button>
      </Link>
    </div>
  );
}
