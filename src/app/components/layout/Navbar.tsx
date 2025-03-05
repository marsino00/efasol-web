"use client";

import Link from "next/link";
import React from "react";

type NavBarProps = {
  containerClassName?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

const links = [
  { href: "/#energies-renovables", label: "Energies renovables" },
  { href: "/#services", label: "Serveis" },
  { href: "/#about", label: "Sobre nosaltres" },
  { href: "/#contact", label: "Contacta'ns" },
];

export default function NavBar({
  containerClassName = "",
  linkClassName = "",
  onLinkClick,
}: NavBarProps) {
  return (
    <nav className={containerClassName}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={linkClassName}
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
