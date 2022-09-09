import "./Modal.css";
const Modal = (props) => {
    function isErrorChangeHandler() {
        props.setUser((prevState) => {
            return {...prevState,error:{state:false,title:'',message:''}}
        })
    }
  return (
    <div className="backdrop" onClick={isErrorChangeHandler}>
      <div className="modal">
        <header className="modal__header">{props.title}</header>
        <div className="modal__body">
          <p>{props.message}</p>
        </div>
        <footer className="modal__footer">
          <button type="button" onClick={isErrorChangeHandler}>Okay</button>
        </footer>
      </div>
    </div>
  );
};
export default Modal;
