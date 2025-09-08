import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const PageHeaderSubsection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch w-full relative flex-[0_0_auto]">
      <div className="flex items-center gap-[168px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2 relative flex-1 grow">
          <h1 className="relative w-fit font-headings-h1 font-[number:var(--headings-h1-font-weight)] text-white text-[length:var(--headings-h1-font-size)] tracking-[var(--headings-h1-letter-spacing)] leading-[var(--headings-h1-line-height)] whitespace-nowrap [font-style:var(--headings-h1-font-style)]">
            All Routers
          </h1>
        </div>

        <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="inline-flex flex-[0_0_auto] items-center gap-2 px-3 py-1.5 h-auto bg-[#ffffff08] border-[#ffffff33] hover:bg-[#ffffff12] text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]"
            >
              Today
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
