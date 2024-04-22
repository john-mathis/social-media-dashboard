"use client";

import Image from "next/image";
import MainCardData from "../MainCard/MainCardData";

interface MainCardProps {
  img: string;
  username: string;
  followers: number;
  engagement: any;
}

export default function MainCard() {
  return (
    <section className="rounded-md m-auto text-center w-[20rem] h-[13rem] bg-red-500">
      <div className="w-24 mx-auto mb-4 flex ">
        <Image
          src="/images/icon-facebook.svg"
          alt="facebook icon"
          width={20}
          height={20}
        />
        <p className="text-xs">{MainCardData.facebook.username}</p>
      </div>
      <p className="text-6xl">1987</p>
      <p className=" text-xs uppercase tracking-[.313em]">Followers</p>
      <p className="mt-4">12 Today</p>
    </section>
  );
}
