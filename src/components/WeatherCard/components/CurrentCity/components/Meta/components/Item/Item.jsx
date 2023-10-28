const Item = ({imgSrc,description,children})=>{
    return (
      <div>
        <img src={imgSrc} alt={description} />
        <div>{children}</div>
      </div>
    );
}

export default Item