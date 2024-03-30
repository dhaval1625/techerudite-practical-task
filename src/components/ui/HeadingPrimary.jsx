function HeadingPrimary({ className, children }) {
   return (
      <h2 className={`${className ? className : ''} text-4xl leading-tight font-bold capitalize`}>
         {children}
      </h2>
   );
}
export default HeadingPrimary;
