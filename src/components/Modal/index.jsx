import FormularioServico from "../FormServico";
function Modal() {
  const openModal = () => {
    document.getElementById("modal_1").showModal();
  };

  const closeModal = () => {
    document.getElementById("modal_1").close();
  };

  return (
    <>
      <button className="btn-ghost text-white" onClick={openModal}>
        Cadastrar
      </button>
      <dialog id="modal_1" className="modal">
        <div className="modal-box relative text-center bg-white">
          <FormularioServico />
          <div className="modal-action">
            <button
              className="btn bg-white btn-sm btn-circle absolute right-2 top-2  "
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
