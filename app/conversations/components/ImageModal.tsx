import Modal from "@/app/components/modal/Modal";
import { NextPage } from "next";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src: string;
}

const ImageModal: NextPage<ImageModalProps> = ({
  isOpen = false,
  onClose,
  src,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image className="object-cover" fill alt="Image" src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
