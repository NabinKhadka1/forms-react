import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.isErrorChangeHandler} />;
  };

  const ModalOverLay = (props) => {
    return (
      <div className="modal">
        <header className="modal__header">{props.title}</header>
        <div className="modal__body">
          <p>{props.message}</p>
        </div>
        <footer className="modal__footer">
          <button type="button" onClick={props.isErrorChangeHandler}>
            Okay
          </button>
        </footer>
      </div>
    );
  };
  function isErrorChangeHandler() {
    props.setUser((prevState) => {
      return { ...prevState, error: { state: false, title: "", message: "" } };
    });
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop isErrorChangeHandler={isErrorChangeHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay
          isErrorChangeHandler={isErrorChangeHandler}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};
export default Modal;
