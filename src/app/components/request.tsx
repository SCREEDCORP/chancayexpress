import { ProductRequestStatus } from "@prisma/client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function RequestList({ children }: React.PropsWithChildren) {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="">
          <div className="">{children}</div>
        </div>
      </div>
    </section>
  );
}

type RequestItemProps = {
  storeName: string;
  productName: string;
  requestCode: string;
  requestDescription: string;
  requestStatus: ProductRequestStatus;
  requestQuantity: number;
  requestId: string;
  onSelectStatus: (params: {
    requestId: string;
    status: ProductRequestStatus;
  }) => void;
};

const friendlyEnum: Record<ProductRequestStatus, string> = {
  INACTIVE: "Pendiente",
  IN_CHICKEN: "En cocina",
  TO_DELIVER: "Por entregar",
};

export function RequestItem({
  requestDescription,
  productName,
  requestCode,
  requestStatus,
  storeName,
  requestQuantity,
  onSelectStatus,
  requestId,
}: RequestItemProps) {
  return (
    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 overflow-hidden ease-in-out duration-500 w-full mx-auto mb-7">
      <div className="lg:flex">
        <div className="relative md:shrink-0"></div>
        <div className="p-6 w-full">
          <ul className="grid grid-cols-3 list-none pb-6">
            <li className="block items-center">
              <span className="bg-slate-900 text-white dark:bg-slate-800 text-[16px] px-2.5 py-1 font-semibold rounded-full h-5">
                {storeName}
              </span>
            </li>
            <li className="text-center">
              <span className="text-slate-400 text-sm">
                {requestQuantity} {productName}
              </span>
            </li>
            <li></li>
          </ul>

          <div className="flex justify-between gap-4">
            <div>{requestDescription}</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  Estado del pedido:{" "}
                  <span className="font-bold">
                    {friendlyEnum[requestStatus]}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {(
                  Object.keys(
                    ProductRequestStatus,
                  ) as Array<ProductRequestStatus>
                ).map((status) =>
                  status === requestStatus ? null : (
                    <DropdownMenuItem
                      key={status}
                      onClick={() => onSelectStatus({ requestId, status })}
                    >
                      {friendlyEnum[status]}
                    </DropdownMenuItem>
                  ),
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Link
              href={`#`}
              className="btn btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"
            ></Link> */}
          </div>

          <div className="pt-6">
            <span className="bg-slate-900 text-white dark:bg-slate-800 text-[15px] px-2.5 py-1 font-semibold rounded-full h-5">
              {requestCode}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
