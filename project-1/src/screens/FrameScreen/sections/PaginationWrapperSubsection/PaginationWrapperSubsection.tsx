import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "../../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const PaginationWrapperSubsection = (): JSX.Element => {
  const pageNumbers = [
    { number: 1, isActive: true },
    { number: 2, isActive: false },
    { number: 3, isActive: false },
    { number: 4, isActive: false },
    { number: 5, isActive: false },
  ];

  return (
    <div className="flex flex-col items-end gap-2.5 px-4 py-0 self-stretch w-full relative flex-[0_0_auto]">
      <div className="inline-flex items-center gap-[26px] relative flex-[0_0_auto]">
        <Pagination>
          <PaginationContent className="gap-2">
            <PaginationItem>
              <button
                className="inline-flex items-center gap-2 p-1 relative flex-[0_0_auto] rounded opacity-25"
                disabled
              >
                <ChevronsLeftIcon className="w-4 h-4" />
              </button>
            </PaginationItem>

            <PaginationItem>
              <button
                className="inline-flex items-center gap-2 p-1 relative flex-[0_0_auto] rounded opacity-25"
                disabled
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
            </PaginationItem>

            {pageNumbers.map((page) => (
              <PaginationItem key={page.number}>
                <PaginationLink
                  href="#"
                  isActive={page.isActive}
                  className={`flex flex-col w-6 h-6 items-center justify-center gap-2 px-3 py-1.5 relative rounded ${
                    page.isActive
                      ? "bg-[#ffffff33] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-bold-default-font-size)] tracking-[var(--body-bold-default-letter-spacing)] leading-[var(--body-bold-default-line-height)] [font-style:var(--body-bold-default-font-style)]"
                      : "font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#999999] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]"
                  }`}
                >
                  {page.number}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                className="inline-flex items-center gap-2 p-1 relative flex-[0_0_auto] rounded"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </PaginationNext>
            </PaginationItem>

            <PaginationItem>
              <button className="inline-flex items-center gap-2 p-1 relative flex-[0_0_auto] rounded">
                <ChevronsRightIcon className="w-4 h-4" />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <Select defaultValue="10">
            <SelectTrigger className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] bg-transparent border-0 border-b border-[#ffffff33] rounded-none px-0 py-1 h-auto">
              <div className="inline-flex items-center gap-2 px-0 py-1 relative flex-[0_0_auto]">
                <SelectValue className="flex-1 h-5 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative mt-[-1.00px] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] whitespace-nowrap [font-style:var(--body-normal-default-font-style)]" />
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative w-fit font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] whitespace-nowrap [font-style:var(--body-normal-default-font-style)]">
            per page
          </div>
        </div>
      </div>
    </div>
  );
};
