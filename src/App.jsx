import Header from './Header.jsx'
import Content from './Content.jsx'

function App() {

  return (
    <>
      <div className='bg-green-950'>
        <Header />
        <div className="border-gray-200 ">
          <div className="max-w-screen-xl p-4 mx-auto">
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
