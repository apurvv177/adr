import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  const mainNavItems = [
    { label: "Dashboard", active: false },
    { label: "Ingestion", active: false },
    { label: "Media Manager", active: false },
    { label: "Linear TV", active: true },
    { label: "On Demand", active: false },
    { label: "Analytics", active: false },
    { label: "Reports", active: false },
    { label: "Alerts", active: false },
  ];

  const subNavItems = [
    { label: "Channels", active: false },
    { label: "Linear distributions", active: true },
    { label: "EPG", active: false },
    { label: "Schedule", active: false },
    { label: "Playout", active: false },
    { label: "Platforms", active: false },
  ];

  return (
    <div className="flex flex-col w-full items-start relative flex-[0_0_auto] z-[1]">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#1e1e1e] border-b [border-bottom-style:solid] border-[#ffffff14]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <img
                  className="relative w-4 h-4"
                  alt="Product switcher"
                  src="/product-switcher.svg"
                />

                <div className="relative w-[108px] h-4">
                  <img
                    className="absolute w-[109px] h-[22px] top-[-3px] -left-px"
                    alt="Logo"
                    src="/logo.svg"
                  />
                </div>
              </div>

              <img
                className="relative w-px h-[54px] mr-[-1.00px] object-cover"
                alt="Separator"
                src="/separator.svg"
              />
            </div>

            <NavigationMenu>
              <NavigationMenuList className="inline-flex items-center relative flex-[0_0_auto] bg-transparent">
                {mainNavItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={`inline-flex items-center gap-1 p-4 relative flex-[0_0_auto] ${
                        item.active
                          ? "border-b-2 [border-bottom-style:solid] border-[#fda560]"
                          : ""
                      }`}
                    >
                      <div
                        className={`relative w-fit ${
                          item.active ? "mt-[-2.00px]" : "mt-[-1.00px]"
                        } ${
                          item.active
                            ? "font-[number:var(--body-bold-default-font-weight)] text-[#fda560] text-[length:var(--body-bold-default-font-size)] tracking-[var(--body-bold-default-letter-spacing)] leading-[var(--body-bold-default-line-height)] font-body-bold-default [font-style:var(--body-bold-default-font-style)]"
                            : "font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#999999] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]"
                        } whitespace-nowrap`}
                      >
                        {item.label}
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto]">
              <Button
                variant="ghost"
                size="icon"
                className="relative w-4 h-4 p-0 bg-[url(/notification.svg)] bg-[100%_100%] hover:bg-[url(/notification.svg)]"
              />

              <Button
                variant="ghost"
                size="icon"
                className="relative w-4 h-4 p-0 bg-[url(/faq.svg)] bg-[100%_100%] hover:bg-[url(/faq.svg)]"
              />

              <Button
                variant="ghost"
                size="icon"
                className="relative w-4 h-4 p-0 bg-[url(/configuration.svg)] bg-[100%_100%] hover:bg-[url(/configuration.svg)]"
              />

              <Avatar className="w-[34px] h-[34px] bg-[#fda560]">
                <AvatarFallback className="bg-[#fda560] text-[#0f0f0f] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] tracking-[var(--body-bold-default-letter-spacing)] leading-[var(--body-bold-default-line-height)] [font-style:var(--body-bold-default-font-style)]">
                  AM
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-8 pl-[182px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(337deg,rgba(121,39,37,1)_5%,rgba(1,0,100,1)_64%,rgba(1,22,63,1)_97%)]">
          {subNavItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`inline-flex h-14 items-center justify-center gap-2.5 px-0 py-2 relative flex-[0_0_auto] rounded hover:bg-transparent ${
                item.active ? "bg-transparent" : "bg-transparent"
              }`}
            >
              <div
                className={`relative w-fit ${
                  item.active
                    ? "font-[number:var(--body-bold-default-font-weight)] text-darkglobalprimary font-body-bold-default text-[length:var(--body-bold-default-font-size)] tracking-[var(--body-bold-default-letter-spacing)] leading-[var(--body-bold-default-line-height)] [font-style:var(--body-bold-default-font-style)]"
                    : "font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]"
                } whitespace-nowrap`}
              >
                {item.label}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
