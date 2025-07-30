import { BackButton } from "@/components/back-btn";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-w-full flex-col py-40 md:py-52">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-xs flex-col gap-8 md:max-w-lg">
          <div className="mb-12 flex items-center justify-between">
            <BackButton />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
