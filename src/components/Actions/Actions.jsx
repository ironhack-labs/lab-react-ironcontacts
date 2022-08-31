import './Actions.styles.css'


export const Actions = (props) => {
 const { buttons } = props
 return(
  <div className='actions'>
   {buttons.map((data) => {
    return(
     <> 
      <button onClick={() => data.handleClick()}>{data.nameButton}</button>
     </>
    )

   })}
  </div>
 )
}