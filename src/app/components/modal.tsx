import Link from "next/link";
import { MdClose } from "react-icons/md";

type ModalProps = {
  itemId: string | null;
  onClose: () => void;
};

export function Modal({ itemId, onClose }: ModalProps) {
  return (
    <div
      className={`fixed z-50 overflow-hidden inset-0 m-auto justify-center items-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${itemId ? "" : "hidden"}`}
    >
      <div className="relative w-full h-auto max-w-md p-4">
        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h5 className="text-xl font-semibold">Place a Bid</h5>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <MdClose onClick={() => onClose()} />
            </button>
          </div>
          <div className="p-6">
            <form className="text-start">
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold">Your Bid Price:</label>
                  <input
                    name="etherium"
                    id="number"
                    type="number"
                    className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                    placeholder="00.00 ETH"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold">Enter Your QTY:</label>
                  <input
                    name="quantity"
                    id="number2"
                    type="number"
                    className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                    placeholder="0"
                  />
                  <span className="text-slate-400 text-sm">
                    <span className="text-slate-900 dark:text-white mt-1">
                      Note:
                    </span>{" "}
                    Max. Qty 5
                  </span>
                </div>
              </div>
            </form>

            <div className="pt-4 border-t dark:border-t-gray-800">
              <div className="flex justify-between">
                <p className="font-semibold text-sm"> You must bid at least:</p>
                <p className="text-sm text-violet-600 font-semibold">
                  {" "}
                  1.22 ETH{" "}
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <p className="font-semibold text-sm"> Service free:</p>
                <p className="text-sm text-violet-600 font-semibold">
                  {" "}
                  0.05 ETH{" "}
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <p className="font-semibold text-sm"> Total bid amount:</p>
                <p className="text-sm text-violet-600 font-semibold">
                  {" "}
                  1.27 ETH{" "}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href="#"
                className="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white w-full"
              >
                <i className="mdi mdi-gavel"></i> Place a Bid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
