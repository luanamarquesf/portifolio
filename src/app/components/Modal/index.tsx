import { useEffect } from "react";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (isOpen) {
     // document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup para evitar efeitos colaterais
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50  w-screen h-screen"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-8 relative overflow-y-auto rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none text-2xl"
          aria-label="Close"
        >
          ✕
        </button>
        <div className={"flex justify-center items-center"}>{children}</div>
      </div>
    </div>
  );
};
