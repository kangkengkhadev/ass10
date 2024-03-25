import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='h-14 bg-white fixed top-0 left-0 right-0 z-30 
        flex flex-row-reverse border-t-2 border-t-grey-400 border-t-solid border-b-2 border-b-grey-400 border-b-solid'>
            <Image src={'/img/vaccine.png'} className='h-full w-auto' 
            alt='logo' width={0} height={0} sizes='100vh' />
            <TopMenuItem title='Menu Item Booking' pageRef='/booking'/>
            {
                session ? <Link href="/api/auth/signout">
                    <div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>
                        Sign-Out
                    </div>
                </Link>
                : <Link href="/api/auth/signin">
                    <div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>
                        Sign-In
                    </div>
                </Link>
            }
        </div>
    );
}