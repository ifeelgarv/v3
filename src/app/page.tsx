import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col py-40 md:py-52">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-xs flex-col gap-12 md:max-w-lg">
          <Main />
          <Navbar />
          <div className="text-xs text-secondary-foreground">
            this site is
            <span className=""> open source</span> and
            <span className=""> free to use</span>.
            <div>built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed underline-offset-3 transition-colors duration-300 hover:text-white"
            >
              Next.js
            </a>{" "}
            and maintained by{" "}
            <a
              href="https://x.com/ifeel_garv"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed underline-offset-3 transition-colors duration-300 hover:text-white"
            >
              @ifeel_garv
            </a>
            .
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
