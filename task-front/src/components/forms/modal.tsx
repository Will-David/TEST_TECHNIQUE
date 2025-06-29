import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";

interface ModalBoxProps {
  openModal: boolean;
  setOpenModal: (state: boolean) => void;
  onConfirm: () => void;
}

export default function ModalBox({ openModal, setOpenModal, onConfirm }: ModalBoxProps) {
  return (
    <Modal className = "bg-transparent" show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <ModalHeader />
      <ModalBody>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Voulez-vous vraiment supprimer cette tâche ?
          </h3>
          <div className="flex justify-center gap-4">
            <Button className = "cursor-pointer" color="red" onClick={onConfirm}>
              Oui
            </Button>
            <Button className = "cursor-pointer" color="alternative" onClick={() => setOpenModal(false)}>
              Non, Annuler
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
