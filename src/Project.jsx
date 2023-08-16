const Project = (props) => {
  return (
    <div className='px-4 py-2 my-4 transition ease-in-out delay-75 border rounded-lg text-green-50 border-green-50 hover:text-green-100 hover:bg-green-800'>
      <div className="mb-4 text-2xl font-semibold">{props.name}</div>
      <p>{props.description}</p>
      {props.link && <div className="mt-2">Link: <a href={props.link} target="_blank" className="underline">{props.link}</a></div>}
      <p className="mt-2 mb-3 font-semibold">Stack:</p>
      <ul className="flex gap-2">
        {props.stack.map(item => <li className="px-2 py-0.5 text-sm bg-green-300 text-green-950 rounded-2xl">{item}</li>)}

      </ul>
    </div>
  )
}

export default Project