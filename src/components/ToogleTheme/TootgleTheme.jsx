import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const ToogleTheme = () => {
  const Toogle = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={Toogle}/>
      <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={Toogle}/>
    </div>
  )
}

export default ToogleTheme
