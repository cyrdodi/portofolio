import Project from './Project'
import SocialBadge from './SocialBadge'

import logo from './assets/avatar.png'
import linkednLogo from './assets/linkedin.png'
import githubLogo from './assets/github-mark.png'
import instagramLogo from './assets/instagram.png'
import twitterLogo from './assets/twitter.png'
import gmailLogo from './assets/gmail.png'

const Content = () => {

  const socialBadge = [
    {
      href: 'https://github.com/cyrdodi',
      alt: 'Github Logo',
      logo: githubLogo,
    },
    {
      href: 'https://www.linkedin.com/in/cyrillus-dodi-tri-yulian-4725ab211/',
      alt: 'Linkedn Logo',
      logo: linkednLogo,
    },
    {
      href: 'https://www.instagram.com/cyrdodi/',
      alt: 'Instagram Logo',
      logo: instagramLogo,
    },
    {
      href: 'https://twitter.com/cyrdodi',
      alt: 'Twitter Logo',
      logo: twitterLogo,
    },
    {
      href: 'mailto:cdoditri@gmail.com',
      alt: 'Gmail Logo',
      logo: gmailLogo,
    },

  ]

  const projects = [
    {
      name: 'E-Kaku v2',
      link: 'https://e-kaku.pandeglangkab.go.id',
      description: 'Aplikasi pembuatan kartu kuning di Dinas Transmigrasi dan Ketenagakerjaan Kab. Pandeglang',
      stack: [
        'Laravel', 'Tailwind CSS'
      ]
    },
    {
      name: 'SIMINAW',
      link: 'https://siminaw.pandeglangkab.go.id',
      description: 'Aplikasi manajemen inventaris Aplikasi dan Website di Diskomsantik Kab. Pandeglang',
      stack: [
        'Laravel', 'Filament PHP', 'Tailwind CSS'
      ]
    },
    {
      name: 'e-Hom',
      description: 'Elektronik Handover',
      stack: [
        'Codeignigter 3', , 'Tailwind CSS'
      ]
    },
    {
      name: 'REMI',
      description: 'Penilaian Remunerasi Elektronik RS Misi Lebak',
      stack: [
        'Codeignigter 3', , 'Tailwind CSS'
      ]
    },
    {
      name: 'DOMI',
      description: 'Pendaftaran Online DOMI',
      link: 'https://domi.misilebak.com',
      stack: [
        'Codeignigter 3', 'Bootstrap CSS'
      ]
    },
  ]


  return (
    <div className='text-green-50'>
      <section className="flex justify-between max-w-6xl gap-8 mx-auto mt-32">
        <div>
          <div className='text-6xl font-bold '>Halo 👋, Saya <span className='text-blue-50'>Dodi Yulian</span></div>
          <p className='mt-4 mb-2 text-3xl font-semibold text-green-200'>Web Developer</p>
          <p className='w-3/4 text-lg'>Saya membuat aplikasi web & API menggunakan bahasa pemrograman PHP dengan framework Laravel.</p>
          <div className='mt-4 border border-green-100' />
          {/* Links */}
          <div className='mt-4'>Temukan saya di:</div>
          <div className="flex gap-4 px-4 py-2 mt-2 ">
            {socialBadge.map((item) => <SocialBadge href={item.href} logo={item.logo} alt={item.alt} />)}
          </div>
        </div>
        <div>
          <img className="rounded-full w-72" src={logo} alt="Photo of Dodi Yulian" />
        </div>
      </section>

      <section>
        <div className='mt-24 mb-10 text-2xl'>Projek Saya 🚀</div>

        {projects.map(project => <Project name={project.name} description={project.description} link={project.link} stack={project.stack} />)}
      </section>
    </div>
  )
}

export default Content