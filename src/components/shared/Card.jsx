function Card({ children, cssClass }) {
  const cardClass = cssClass
    ? `rounded-5 bg-surface p-4 mb-4 md:p-6 md:mb-6 last:mb-0 ${cssClass}`
    : "rounded-5 bg-surface p-4 mb-4 md:p-6 md:mb-6 last:mb-0";

  return <div className={cardClass}>{children}</div>;
}

export default Card;
