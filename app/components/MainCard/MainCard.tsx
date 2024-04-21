"use client";

import Image from "next/image";
import MainCardData from "../MainCard/MainCardData";

interface MainCardProps {
  logo: string;
  username: string;
  followers: number;
  engagement: any;
}

export default function MainCard() {
  return (
    <section className="rounded-md m-auto text-center w-[20rem] h-[13rem] bg-red-500">
      <Image
        src="/images/icon-facebook.svg"
        alt="facebook icon"
        width={30}
        height={30}
      />
      <p>@nathanf</p>
      <p className="text-6xl">1987</p>
      <p className="uppercase tracking-[.313em]">Followers</p>
      <p>12 Today</p>
    </section>
  );
}
