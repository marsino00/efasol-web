"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type NavBarProps = {
  containerClassName?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function NavBar({
  containerClassName = "",
  linkClassName = "",
  onLinkClick,
}: NavBarProps) {
  const t = useTranslations("navbar");

  const links = [
    { href: "/#energies-renovables", label: t("energies-renovables") },
    { href: "/#services", label: t("services") },
    { href: "/#about", label: t("about") },
    { href: "/#contact", label: t("contact") },
  ];
  return (
    <nav className={containerClassName}>
      {/* Adaptar las clases del ul según sea necesario para desktop/mobile */}
      <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 list-none p-0">
        {links.map((link) => (
          <li key={link.href}>
            {" "}
            {/* Envolver en li */}
            <Link
              href={link.href}
              className={linkClassName}
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
