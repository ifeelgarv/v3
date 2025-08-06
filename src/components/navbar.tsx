import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-col gap-1">
      <Link
        href="/blogs"
        className="underline decoration-dashed underline-offset-[5px]"
      >
        blogs
      </Link>
      <Link
        href="/projects"
        className="underline decoration-dashed underline-offset-[5px]"
      >
        projects
      </Link>
      <Link
        href="/experiences"
        className="underline decoration-dashed underline-offset-[5px]"
      >
        experiences
      </Link>
      
    </div>
  );
};
