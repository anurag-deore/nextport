import Link from "next/link";

export default function IconLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} target="_blank">
      <div className="bg-white border-2 rounded-xl text-slate-800 h-[60px] w-[60px] md:w-[60px] md:h-[60px] grid place-items-center">
        {children}
      </div>
    </Link>
  );
}
