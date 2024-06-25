const Modal = function Modal({ children, onClose }) {
  return (
    <>
      <div className="bg-red-400/40 border-solid border-4 border-red-600 p-4">
        {children}
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Modal;
