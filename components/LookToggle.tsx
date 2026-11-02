"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isClassic, lookHref } from "@/src/lib/looks";

type Props = {
  className?: string;
  activeClassName: string;
  inactiveClassName: string;
  onClick?: () => void;
};

/** navbar year switch: 2025-26 is the original look and team, 2026-27 is the current one. */
export default function LookToggle({ className, activeClassName, inactiveClassName, onClick }: Props) {
  const pathname = usePathname();
  const classic = isClassic(pathname);
  const other = lookHref(pathname);
  const years = [
    { label: "2025–26", active: classic },
    { label: "2026–27", active: !classic },
  ];

  return (
    <div className={className} role="group" aria-label="academic year">
      {years.map((y) =>
        y.active ? (
          <span key={y.label} className={activeClassName} aria-current="page">
            {y.label}
          </span>
        ) : (
          <Link key={y.label} href={other} className={inactiveClassName} onClick={onClick}>
            {y.label}
          </Link>
        )
      )}
    </div>
  );
}
