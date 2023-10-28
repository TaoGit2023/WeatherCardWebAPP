const Container = ({children,className})=>{
    return (
      <div className={`rounded-3xl shadow-lg shadow-indigo-500/40 ${className}`}>
        {children}
      </div>
    );
}
export default Container