import '/src/style/EditorialContent.css'

/*
function EditorialContent(props) {
  return (
    <div className="EditorialContent">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>{props.c}</p>
    </div>
  )
}
*/

function EditorialContent({ title, content }) {
    return (
      <div className="EditorialContent">
          <h1 className='editorialContentTitle'>{title}</h1>
          <p className='editorialContentContent'>{content}</p>
      </div>
    )
  }

export default EditorialContent
