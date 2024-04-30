"use client";

import Image from "next/image";
import MainCardData from "../MainCard/MainCardData";

interface MainCardProps {
  img: string;
  username: string;
  followers: number;
  engagement: any;
}

export default function MainCard({
  img,
  username,
  followers,
  engagement,
}: MainCardProps) {
  console.log({ MainCardData });
  return (
    <section className="my-6 border-2 border-solid rounded-md m-auto text-center w-[20rem] h-[13rem]">
      <div className="flex flex-col justify-center items-center mx-auto h-full">
        <div className="w-24 mx-auto mb-4 flex">
          <Image
            src={img ? img : ""}
            alt="facebook icon"
            width={20}
            height={20}
          />
          <p className="text-xs">{username}</p>
        </div>
        <p className="text-6xl">{followers}</p>
        <p className=" text-xs uppercase tracking-[.313em]">followers</p>
        <p
          className={
            engagement > 0
              ? "text-[var(--LimeGreen)]"
              : "text-[var(--BrightRed)]"
          }
        >
          {engagement}
        </p>
      </div>
    </section>
  );
}
