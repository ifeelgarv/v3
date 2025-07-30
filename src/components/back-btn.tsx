"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex cursor-pointer items-center gap-1"
    >
      <Image
        src="/back.svg"
        width={24}
        height={24}
        className="inline h-3 w-3"
        alt="back button"
      />
      <span className="font-light italic">back</span>
    </button>
  );
};