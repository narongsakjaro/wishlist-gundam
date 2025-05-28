import React, { useRef, useEffect } from "react";

const Modal = ({ children, onClose, isOpen }) => {
  const modalRef = useRef();
  const status = isOpen ? "" : "hidden";
  const classBase = `${status} fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black/50`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={classBase}>
      <div className="relative w-full max-w-2xl max-h-full">
        <div
          ref={modalRef}
          className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-800"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
