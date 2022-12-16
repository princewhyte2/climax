import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { ModalProps } from "./ConversationModal";

export default function LoginNotificationModal({ open, setOpen }: ModalProps) {
  const router = useRouter();
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
                <Dialog.Panel className="text-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-10 py-[39px] align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[32px] font-semibold leading-[48px] mb-5 capitalize text-[#031B13] "
                  >
                    login required
                  </Dialog.Title>
                  <div className="mb-[42px] ">
                    <p className="text-xs font-normal text-black ">
                      You are not yet logged in. To start a conversation or join
                      a converstaion, you will have to login.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => router.push("/login")}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#17B657] capitalize px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                      goto login
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
