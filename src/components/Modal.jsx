import "../styles/modal.css"

const Modal = ({ isOpen, onClose, children }) => {

  return (
    <div className="modal-container" style={{ display: isOpen ? 'grid' : 'none', zIndex:1}}>
      <div className="modal-body ">
        <button className="modal-close close" onClick={onClose} >CERRAR</button>
        {children}
        <button className="close" onClick={onClose}>CERRAR</button>
      </div>
    </div>
  )
}

export default Modal