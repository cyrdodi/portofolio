const Project = () => {
  return (
    <div className='px-4 py-2 my-4 border rounded-lg text-green-50 border-green-50 hover:text-green-900 hover:bg-green-50'>
      <div className="mb-4 text-2xl font-semibold">Project Name</div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam beatae, incidunt magnam rerum ratione omnis temporibus autem, explicabo reprehenderit nam, nulla doloremque sint illo. Beatae nostrum doloribus neque hic sequi, ex illo.</p>
      <div className="mt-2">Link: <a href="" className="underline">project-url.com</a></div>
      <p className="mt-2 font-semibold">Stacks:</p>
      <ul className="flex gap-2">
        <li className="px-2 py-0.5 text-sm bg-blue-300 rounded-2xl">Laravel</li>
        <li className="px-2 py-0.5 text-sm bg-blue-300 rounded-2xl">Laravel</li>
      </ul>
    </div>
  )
}

export default Project