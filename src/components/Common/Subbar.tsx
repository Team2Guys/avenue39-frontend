
import Link from 'next/link'
import SearchBar from './Search'
import Image from 'next/image'
import UserIcons from './Usericon'

const Subbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center p-2'>
    <div className=''><SearchBar/></div>
    <Link href="/" className=''>
    <Image  className='h-[35px] w-[131px]' src="/assets/images/logo.webp" height={400} width={400} alt="logo"/>
    </Link>
    <div className=''>
    <UserIcons/>
    </div>
    </div>
  )
}

export default Subbar