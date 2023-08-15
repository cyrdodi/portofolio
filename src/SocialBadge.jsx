const SocialBadge = (props) => {
  return (
    <>
      <a href={props.href}>
        <img
          src={props.logo}
          alt={props.alt}
          className="max-w-[30px] bg-white p-0.5 rounded-full  hover:-translate-y-1 hover:scale-110 duration-300"
        /></a>
    </>
  )
}

export default SocialBadge