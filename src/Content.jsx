import logo from './assets/avatar.png'
import linkednLogo from './assets/linkedin.png'
import githubLogo from './assets/github-mark.png'
import instagramLogo from './assets/instagram.png'
import twitterLogo from './assets/twitter.png'
import gmailLogo from './assets/gmail.png'
import Project from './Project'

const Content = () => {
  return (
    <div className='text-green-50'>
      <section className="flex justify-between max-w-6xl gap-8 mx-auto mt-32">
        <div>
          <div className='text-6xl font-bold'>Halo 👋, Saya <span className='text-blue-50'>Dodi Yulian</span></div>
          <p className='mt-4 mb-2 text-3xl font-semibold text-green-200'>Web Developer</p>
          <p className='w-3/4 text-lg'>Saya membuat aplikasi web & API menggunakan bahasa pemrograman PHP dengan framework Laravel.</p>
          <div className='mt-4 border border-green-100' />
          {/* Links */}
          <div className='mt-4'>Temukan saya di:</div>
          <div className="flex gap-4 px-4 py-2 mt-2 ">
            <a href="https://github.com/cyrdodi">
              <img
                src={githubLogo}
                alt="Github logo"
                className="max-w-[30px] bg-white p-0.5 rounded-full"
              /></a>
            <a
              href="https://www.linkedin.com/in/cyrillus-dodi-tri-yulian-4725ab211/"
            >
              <img
                src={linkednLogo}
                alt="Linkedin icon"
                className="max-w-[30px]"
              /></a>
            <a href="https://www.instagram.com/cyrdodi/">
              <img
                src={instagramLogo}
                alt="Instagram icon"
                className="max-w-[30px]"
              /></a>
            <a href="https://twitter.com/cyrdodi">
              <img
                src={twitterLogo}
                alt="Twitter icon"
                className="max-w-[30px]"
              /></a>
            <a href="mailto:cdoditri@gmail.com">
              <img
                src={gmailLogo}
                alt="Gmail Icon"
                className="max-w-[30px]"
              /></a>
          </div>
        </div>
        <div>
          <img className="rounded-full w-72" src={logo} alt="Photo of Dodi Yulian" />
        </div>
      </section>

      <section>
        <div className='mt-24 mb-10 text-2xl'>Projek Saya 🚀</div>

        <Project />
        <Project />
        <Project />
      </section>
    </div>
  )
}

export default Content