function TextPrimary({ className, children }) {
  return (
    <p className={`${className ? className : ''} text-base text-gray-100 leading-normal`}>{children}</p>
  )
}
export default TextPrimary