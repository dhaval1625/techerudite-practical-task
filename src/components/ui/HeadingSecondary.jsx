function HeadingSecondary({ className, children }) {
   return (
      <h3 className={`${className ? className : ''} text-[22px] leading-tight font-bold capitalize`}>
         {children}
      </h3>
   );
}
export default HeadingSecondary;
