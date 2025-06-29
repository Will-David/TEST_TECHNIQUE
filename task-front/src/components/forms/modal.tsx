import { useEffect } from "react";

interface ModalBoxProps {
  openModal: boolean;
  setOpenModal: (state: boolean) => void;
  onConfirm: () => void;
}

export default function ModalBox({ openModal, setOpenModal, onConfirm }: ModalBoxProps) {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-6 max-w-md w-full mx-4">
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
        >
        </button>

        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Voulez-vous vraiment supprimer cette tâche ?
          </h3>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={onConfirm}
              className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300"
            >
              Oui
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Non, Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}