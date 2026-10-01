"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavAvatar } from "../atoms/NavAvatar";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row justify-around">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            {/* <NavigationMenuTrigger className={navigationMenuTriggerStyle()}> */}
            <Link href={link.href}>{link.label}</Link>
            {/* </NavigationMenuTrigger> */}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavAvatar />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
