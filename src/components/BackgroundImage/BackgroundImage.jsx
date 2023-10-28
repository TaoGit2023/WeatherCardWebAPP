const BackgroundImage = ({className,children,bg})=>{
    return (
      <div className={`bg-center bg-cover ${className}`} style={{ backgroundImage: `url(${bg})` }}>
        {children}
      </div>
    );
}

export default BackgroundImage