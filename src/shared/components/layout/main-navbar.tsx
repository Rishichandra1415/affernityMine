"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/shared/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { mainNavigation, type NavItemWithChildren } from "@/shared/constants/navigation";

export function MainNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80 shadow-sm" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative flex items-center space-x-2 transition-transform hover:scale-105">
          <Image
            src="https://aaffinitysportsinfra.com/img/logo_aaffinitysports.png"
            alt="Aaffinity Sports Infra"
            width={180}
            height={60}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {mainNavigation.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          "h-10 bg-transparent text-sm font-semibold transition-colors",
                          isScrolled 
                            ? "hover:bg-zinc-100 hover:text-primary data-[state=open]:bg-zinc-100 data-[state=open]:text-primary dark:hover:bg-zinc-800 dark:data-[state=open]:bg-zinc-800" 
                            : "text-white hover:text-primary data-[state=open]:text-primary"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.label}
                              title={subItem.label}
                              href={subItem.href}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild active={pathname === item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "h-10 bg-transparent text-sm font-medium transition-colors",
                          isScrolled
                            ? "hover:bg-zinc-100 hover:text-primary dark:hover:bg-zinc-800"
                            : "text-white hover:text-primary",
                          pathname === item.href && (
                            isScrolled 
                              ? "text-primary font-bold bg-zinc-50 dark:bg-zinc-800/50" 
                              : "text-primary font-bold"
                          )
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className={cn(
            "ml-4 pl-4 border-l transition-colors duration-300",
            isScrolled ? "border-zinc-200 dark:border-zinc-800" : "border-white/20"
          )}>
            <Button className="rounded-full px-6 font-semibold shadow-md transition-transform hover:scale-105 active:scale-95" asChild>
              <Link href="/contact-us">Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "h-10 w-10 transition-colors",
                  isScrolled ? "text-zinc-600 dark:text-zinc-300" : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 sm:w-[400px] border-l dark:border-zinc-800">
              <SheetHeader className="border-b border-zinc-200 p-6 text-left dark:border-zinc-800">
                <Image
                  src="https://aaffinitysportsinfra.com/img/logo_aaffinitysports.png"
                  alt="Aaffinity Sports Infra"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </SheetHeader>
              <nav className="flex flex-col space-y-1 p-6">
                {mainNavigation.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    setIsOpen={setIsOpen}
                  />
                ))}
                <div className="pt-6">
                  <Button className="w-full justify-between rounded-xl py-6 text-base font-semibold shadow-md" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/contact-us">
                      Get a Quote <MoveRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-zinc-900 group-hover:text-primary dark:text-zinc-100 dark:group-hover:text-primary">
            {title}
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-zinc-500 mt-1 dark:text-zinc-400">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MobileNavItem({
  item,
  setIsOpen,
}: {
  item: NavItemWithChildren;
  setIsOpen: (open: boolean) => void;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!item.items) {
    return (
      <Link
        href={item.href}
        className="flex items-center rounded-lg px-3 py-3.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-primary dark:text-zinc-300 dark:hover:bg-zinc-800/50"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-zinc-500 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="my-1 ml-4 flex flex-col space-y-1 border-l-2 border-zinc-200 pl-3 dark:border-zinc-800">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="block rounded-md py-2.5 px-3 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-primary dark:text-zinc-400 dark:hover:bg-zinc-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}