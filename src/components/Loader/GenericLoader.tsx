import { useState } from "react";
import Modal from "../Modal/Modal";
import Terminal from "../Terminal/Terminal";
import "./GenericLoader.css";

const GenericLoader = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <Modal
      element={<Terminal element={<LoaderBody />} />}
      isMenuOpen={false}
      show={isOpen}
      onClickOutside={closeOverlay}
    />
  );
};

const LoaderBody = () => {
  return (
    <div className="timeline-body">
      <div className="text-bright">&gt;&gt; ✨ Fetching event data...</div>
    </div>
  );
};

export default GenericLoader;
