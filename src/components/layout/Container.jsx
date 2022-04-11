import "./container.element.css"

export default function Container({children, customClass}) {
  return (
    <div className={`container ${[customClass]}`}>
        {children}
    </div>
  )
}
