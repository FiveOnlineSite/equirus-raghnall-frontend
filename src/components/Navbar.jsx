"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { commercialMenu } from "@/data/commercialServices";
import { privateClientsMenu } from "@/data/privateClientServices";
import { reinsuranceMenu } from "@/data/reinsuranceServices";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Private Clients", href: "/private-clients", children: true },
  { label: "Commercial", href: "/commercial", children: true },
  { label: "Reinsurance", href: "/reinsurance", children: true },
];

const mobileServiceMenus = {
  "Private Clients": privateClientsMenu,
  Commercial: commercialMenu,
  Reinsurance: reinsuranceMenu,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const [isDesktopMenuDismissed, setIsDesktopMenuDismissed] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setExpandedMobileMenu(null);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [pathname]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setExpandedMobileMenu(null);
  };

  const closeFocusedDesktopMenu = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const dismissDesktopMenu = () => {
    setIsDesktopMenuDismissed(true);
    closeFocusedDesktopMenu();
  };

  const resetDesktopMenu = () => {
    setIsDesktopMenuDismissed(false);
  };

  return (
    <header className="sticky top-0 z-50 h-[88px] bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 md:px-8 xl:px-16">
        <Link href="/" aria-label="Equirus Raghnall home" className="shrink-0">
          <Image
            src="/assets/shared/raghnall-logo.png"
            alt="Equirus Raghnall"
            width={130}
            height={104}
            priority
            className="h-[84px] w-[105px] object-cover md:h-[104px] md:w-[130px]"
          />
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden h-full items-center lg:flex"
        >
          {navigation.map((item) =>
            item.label === "Private Clients" ? (
              <div className="group/private flex h-full items-center" key={item.label} onMouseEnter={closeFocusedDesktopMenu} onMouseLeave={resetDesktopMenu}>
                <Link
                  href={item.href}
                  onClick={(event) => event.preventDefault()}
                  className="flex h-9 min-w-[135px] items-center justify-center gap-2 text-base leading-[30px] text-[#3d3d3d] transition-colors hover:text-[#0a4e08] group-focus-within/private:text-[#0a4e08]"
                  aria-haspopup="true"
                >
                  <span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#0a4e08] after:transition-transform after:duration-300 group-hover/private:after:scale-x-100 group-focus-within/private:after:scale-x-100">{item.label}</span>
                  <Image
                    src="/assets/shared/chevron-down.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                </Link>

                <div className={`${isDesktopMenuDismissed ? "!invisible !pointer-events-none !opacity-0" : ""} invisible absolute inset-x-0 top-full border-t border-black/5 bg-white opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition duration-200 group-hover/private:visible group-hover/private:opacity-100 group-focus-within/private:visible group-focus-within/private:opacity-100`}>
                  <div className="mx-auto grid min-h-[278px] max-w-[1440px] grid-cols-4 gap-x-16 px-9 py-7 xl:px-14">
                    {privateClientsMenu.map((section) => (
                      <div key={section.title}>
                        <h2 className="mb-3 text-[15px] font-medium text-[#26720f]">
                          {section.title}
                        </h2>
                        <ul className="space-y-2.5">
                          {section.links.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/private-clients/${service.slug}`}
                                onClick={dismissDesktopMenu}
                                className="block text-[13px] leading-5 text-[#444444] transition-colors hover:text-[#0a4e08]"
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.label === "Commercial" ? (
              <div className="group/commercial flex h-full items-center" key={item.label} onMouseEnter={closeFocusedDesktopMenu} onMouseLeave={resetDesktopMenu}>
                <Link
                  href={item.href}
                  onClick={(event) => event.preventDefault()}
                  className="flex h-9 min-w-[135px] items-center justify-center gap-2 text-base leading-[30px] text-[#3d3d3d] transition-colors hover:text-[#0a4e08] group-focus-within/commercial:text-[#0a4e08]"
                  aria-haspopup="true"
                >
                  <span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#0a4e08] after:transition-transform after:duration-300 group-hover/commercial:after:scale-x-100 group-focus-within/commercial:after:scale-x-100">{item.label}</span>
                  <Image
                    src="/assets/shared/chevron-down.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                </Link>

                <div className={`${isDesktopMenuDismissed ? "!invisible !pointer-events-none !opacity-0" : ""} invisible absolute inset-x-0 top-full border-t border-black/5 bg-white opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition duration-200 group-hover/commercial:visible group-hover/commercial:opacity-100 group-focus-within/commercial:visible group-focus-within/commercial:opacity-100`}>
                  <div className="mx-auto grid max-w-[1440px] grid-cols-5 gap-x-10 gap-y-8 px-9 py-7 xl:px-14">
                    {commercialMenu.map((section) => (
                      <div key={section.title}>
                        <h2 className="mb-3 text-[15px] font-medium text-[#26720f]">
                          {section.title}
                        </h2>
                        {section.links.length > 0 && (
                          <ul className="space-y-2.5">
                            {section.links.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/commercial/${service.slug}`}
                                  onClick={dismissDesktopMenu}
                                  className="block text-[13px] leading-5 text-[#444444] transition-colors hover:text-[#0a4e08]"
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.label === "Reinsurance" ? (
              <div className="group/reinsurance relative flex h-full items-center" key={item.label} onMouseEnter={closeFocusedDesktopMenu} onMouseLeave={resetDesktopMenu}>
                <Link
                  href={item.href}
                  onClick={(event) => event.preventDefault()}
                  className="flex h-9 min-w-[135px] items-center justify-center gap-2 text-base leading-[30px] text-[#3d3d3d] transition-colors hover:text-[#0a4e08] group-focus-within/reinsurance:text-[#0a4e08]"
                  aria-haspopup="true"
                >
                  <span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#0a4e08] after:transition-transform after:duration-300 group-hover/reinsurance:after:scale-x-100 group-focus-within/reinsurance:after:scale-x-100">{item.label}</span>
                  <Image
                    src="/assets/shared/chevron-down.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                </Link>

                <div className={`${isDesktopMenuDismissed ? "!invisible !pointer-events-none !opacity-0" : ""} invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 rounded-b-lg border border-t-0 border-black/5 bg-white p-5 opacity-0 shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition duration-200 group-hover/reinsurance:visible group-hover/reinsurance:opacity-100 group-focus-within/reinsurance:visible group-focus-within/reinsurance:opacity-100`}>
                  {reinsuranceMenu.map((section) => (
                    <div key={section.title}>
                      <h2 className="mb-3 text-[15px] font-medium text-[#26720f]">
                        {section.title}
                      </h2>
                      <ul className="space-y-3">
                        {section.links.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/reinsurance/${service.slug}`}
                              onClick={dismissDesktopMenu}
                              className="block text-[13px] leading-5 text-[#444444] transition-colors hover:text-[#0a4e08]"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`group/main flex h-9 min-w-[135px] items-center justify-center gap-2 text-base leading-[30px] transition-colors hover:text-[#0a4e08] ${item.href === "/" ? "text-[#0a4e08]" : "text-[#3d3d3d]"}`}
              >
                <span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#0a4e08] after:transition-transform after:duration-300 group-hover/main:after:scale-x-100">{item.label}</span>
                {item.children && (
                  <Image
                    src="/assets/shared/chevron-down.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                )}
              </Link>
            ),
          )}
        </nav>
        <Link
          href="/contact-us"
          className="hidden h-11 w-[158px] items-center justify-center rounded-lg bg-[#0a4e08] px-3 text-sm font-semibold text-white transition hover:opacity-90 lg:flex"
        >
          Claim Advocacy
        </Link>
        <button
          type="button"
          className="grid size-9 place-items-center rounded-lg text-[#0a4e08] md:size-11 lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5 md:h-5 md:w-6" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform md:w-6 ${isOpen ? "translate-y-[7px] rotate-45 md:translate-y-[9px]" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity md:top-[9px] md:w-6 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform md:top-[18px] md:w-6 ${isOpen ? "-translate-y-[7px] -rotate-45 md:-translate-y-[9px]" : ""}`}
            />
          </span>
        </button>
      </div>
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain border-t border-black/5 bg-white px-5 py-5 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navigation.map((item) => {
              const serviceGroups = mobileServiceMenus[item.label];
              const isExpanded = expandedMobileMenu === item.label;

              if (!serviceGroups) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex min-h-12 items-center border-b border-black/5 text-[#3d3d3d]"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div className="border-b border-black/5" key={item.label}>
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between text-left text-[#3d3d3d]"
                    aria-controls={`mobile-services-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedMobileMenu(isExpanded ? null : item.label)}
                  >
                    <span>
                      {item.label}
                    </span>
                    <Image
                      src="/assets/shared/chevron-down.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-3 size-5 shrink-0"
                      aria-hidden
                    />
                  </button>

                  {isExpanded && (
                    <div id={`mobile-services-${item.label.toLowerCase().replaceAll(" ", "-")}`} className="space-y-5 pb-5 pl-4 pr-2 pt-2">
                      {serviceGroups.map((section) =>
                        section.links.length ? (
                          <div key={section.title}>
                            <p className="mb-2 text-sm font-medium text-[#26720f]">{section.title}</p>
                            <ul className="space-y-1">
                              {section.links.map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    href={`${item.href}/${service.slug}`}
                                    onClick={closeMobileMenu}
                                    className="block py-1.5 text-sm leading-5 text-[#555555]"
                                  >
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null,
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact-us"
              onClick={closeMobileMenu}
              className="mt-5 flex h-11 items-center justify-center rounded-lg bg-[#0a4e08] text-sm font-semibold text-white transition hover:opacity-90"
            >
              Claim Advocacy
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
