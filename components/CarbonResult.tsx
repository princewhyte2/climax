import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ResultPie from "./ResultPie";

export type ModalProps = {
  open: boolean;
  setOpen: (state: boolean) => void;
};
export default function CarbonResult({ open, setOpen }: ModalProps) {
  const closeModal = () => setOpen(false);

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="text-center w-full max-w-[600px]  transform overflow-hidden rounded-2xl bg-white px-[59px] py-[39px] align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="xl:text-[32px] text-xl font-semibold xl:leading-[48px] mb-1 capitalize text-[#031B13] "
                  >
                    Calculate footprint
                  </Dialog.Title>

                  <div className="mb-[29px] ">
                    <p>You have consumed .....</p>
                  </div>
                  <div>
                    <ResultPie />
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#17B657] capitalize px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                      close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
