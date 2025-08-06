import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col py-40">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-xs flex-col gap-12 md:max-w-lg md:screen-line-before md:screen-line-after md:border-x md:border-y md:border-dotted md:border-secondary-foreground/40 md:px-4 md:py-8 lg:px-8 lg:py-12 md:bg-secondary md:rounded-lg md:shadow-lg md:shadow-secondary-foreground/10 dark:md:bg-secondary-foreground/5 dark:md:border-secondary-foreground/20 dark:md:shadow-none dark:md:rounded-none">
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