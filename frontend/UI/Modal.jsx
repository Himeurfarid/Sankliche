import ReactDom from "react-dom";
import propTypes from "prop-types";

function Backdrop({ onClose }) {
  return (
    <div
      role="button"
      onClick={onClose}
      onKeyDown={onClose}
      aria-label="Backdrop"
      tabIndex={0}
    />
  );
}

function ModalOverlay({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");

function Modal({ children, onClose }) {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;

Modal.propTypes = {
  children: propTypes.node.isRequired,
  onClose: propTypes.func.isRequired,
};
ModalOverlay.propTypes = {
  children: propTypes.node.isRequired,
};
Backdrop.propTypes = {
  onClose: propTypes.func.isRequired,
};
