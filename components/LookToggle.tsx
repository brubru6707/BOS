"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** switches between the current look and the 2025-2026 look on the same page. */
export function lookHref(pathname: string): string {
  if (pathname === "/classic" || pathname.startsWith("/classic/")) {
    return pathname.slice("/classic".length) || "/";
  }
  return pathname === "/" ? "/classic" : `/classic${pathname}`;
}

export default function LookToggle({ className, onClick }: { className?: string; onClick?: () => void }) {
  const pathname = usePathname();
  const classic = pathname === "/classic" || pathname.startsWith("/classic/");
  return (
    <Link href={lookHref(pathname)} className={className} onClick={onClick}>
      {classic ? "new look" : "2025–26 look"}
    </Link>
  );
}
