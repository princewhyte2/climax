import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export type ModalProps = {
  open: boolean;
  setOpen: (state: boolean) => void;
};
export default function ConversationModal({ open, setOpen }: ModalProps) {
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-[59px] py-[39px] text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[32px] font-semibold leading-[48px] mb-5 capitalize text-[#031B13] "
                  >
                    Start Conversation
                  </Dialog.Title>
                  <div className="mb-[42px] ">
                    <p className="text-xs font-normal text-black ">
                      Login to join the conversation on climate change and our
                      part in saving the earth
                    </p>
                  </div>

                  <div className="mb-[29px] ">
                    <label htmlFor="title">
                      <p className="font-normal text-xs mb-0.5 text-black capitalize">
                        title
                      </p>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="World on Fire Over?"
                        className="focus:border-2 border rounded-md h-[45px] w-full px-5 text-black text-xs font-normal border-[#CDD5E0] bg-transparent focus:outline focus:outline-[#17B657]"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="title">
                      <p className="font-normal text-xs mb-0.5 text-black capitalize">
                        body
                      </p>
                      <textarea className="py-3 focus:border-2 border rounded-md h-24 w-full px-5 text-black text-xs font-normal border-[#CDD5E0] bg-transparent focus:outline focus:outline-[#17B657]"></textarea>
                    </label>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#17B657] capitalize px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                      // onClick={closeModal}
                    >
                      post conversation
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
