import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col relative items-center justify-between h-screen py-10 bg-white">
      <div className="w-full text-2xl text-center text-zinc-900 font-extrabold">
        Pov: you are about to start the greatest character development arc of
        your life.(this time its serious)
      </div>
      <div className="overflow-hidden size-[400px] object-contain rounded-3xl shadow-2xl">
        <Image
          src={IMAGES.splashScreen}
          alt="splash screen"
          className="h-full object-cover object-bottom"
        />
      </div>
      <Link href="/my-streak" className="">
        <Button
          className="rounded-full bg-white font-bold bg-primary"
          size={"lg"}
        >
          Start your winter arc now!
        </Button>
      </Link>
    </div>
  );
}
