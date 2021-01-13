import s from "./CurrentUser.module.css";

export default function UserModal(props) {
  if (!props.user) {
    return null;
  }

  return (
    <div className={s.root}>
      <div className={s.modal}>
        <div>
          <strong>Username:</strong> {props.user.username}
        </div>
        <div>
          <strong>Name:</strong> {props.user.name}
        </div>
        <div>
          <strong>Email:</strong> {props.user.email}
        </div>
        <div>
          <strong>Website:</strong> {props.user.website}
        </div>
        <button onClick={props.onClose} className={s.button}>
          Close
        </button>
      </div>
    </div>
  );
}
