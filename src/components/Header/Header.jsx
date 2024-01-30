import ToogleTheme from "../ToogleTheme/TootgleTheme"

const Header = () => {
  return (
  <div className="flex h-20 bg-gray-500 justify-between items-center px-5 sm:m-5">
      <span className="text-gray-100">Olá usuário</span>
      <h1 className="text-gray-100 text-xl">Kaique NewsLetter</h1>
      <ToogleTheme className="h-8 hidden text-gray-100 sm:block cursor-pointer"/>
    </div>
  )
}

export default Header
