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
  const displayMainCard = MainCardData.map((a) => {
    return (
      <section className="my-6 border-2 border-solid rounded-md m-auto text-center w-[20rem] h-[13rem]">
        <div className="flex flex-col mx-auto justify-center items-center bg-red-500">
          <div className="w-24 mx-auto mb-4 flex">
            <Image
              src={a?.img ? a.img : ""}
              alt="facebook icon"
              width={20}
              height={20}
            />
            <p className="text-xs">{a?.username}</p>
          </div>
          <p className="text-6xl">{a?.followers}</p>
          <p className=" text-xs uppercase tracking-[.313em]">followers</p>
          <p className="mt-4">{a?.engagement} </p>
        </div>
      </section>
    );
  });

  return displayMainCard;
}
