function Button({ type, cssClass, children, btnId, click }) {
  const btnClass = cssClass
    ? `rounded-5 px-6 py-4  ${cssClass}`
    : "rounded-5 px-6 py-4 ";
  const id = btnId ? btnId : null;

  return (
    <button type={type} className={btnClass} id={id} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
