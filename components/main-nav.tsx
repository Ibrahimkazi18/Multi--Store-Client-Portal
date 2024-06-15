"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
    scrolled: boolean,
}

const MainNav = ({scrolled, className, ...props} : MainNavProps) => {

  const pathName = usePathname()
  const params = useParams()

  const routes = [
    {
      href : "/",
      label : "Home",
      active : pathName === "/"
    },
    {
      href : "/menu",
      label : "Menu",
      active : pathName === "/menu"
    },
    {
      href : "/orders",
      label : "Orders",
      active : pathName === "/orders"
    },
    {
      href : "/about",
      label : "About",
      active : pathName === "/about"
    },
    {
      href : "/contact",
      label : "Contact",
      active : pathName === "/contact"
    },
  ]

  return (
    <div className="ml-auto">
      <nav className={cn("flex  items-center space-x-4 lg:space-x-12 px-6", className)}>
        {routes.map(route => (
          <Link 
            key={route.label} 
            href={route.href} 
            className={cn("text-base font-medium transition-colors hover:text-primary", 
              route.active ? `${scrolled  ? "text-hero font-bold" : "text-black dark:text-white"}` 
              : `${scrolled  ? "text-black " : "text-white"}` )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default MainNav