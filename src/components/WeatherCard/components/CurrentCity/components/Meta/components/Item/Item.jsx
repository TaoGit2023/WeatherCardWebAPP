const Item = ({imgSrc,description,children})=>{
    return (
      <div>
        <img src={imgSrc} alt={description} className="mx-auto"/>
        <div>{children}</div>
      </div>
    );
}

export default Item