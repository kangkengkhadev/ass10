import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';

export default function Card({hospitalName, imgSrc, onRating, value} : 
{hospitalName:string, imgSrc:string, onRating?:Function, value?:number | null}) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>
            {
                onRating ? <Rating name={`${hospitalName} Rating`} value={value} 
                onChange={(e, newValue) => {onRating(hospitalName, newValue)}}
                onClick={(e)=>{e.stopPropagation();}}
                id={`${hospitalName} Rating`}
                data-testid={`${hospitalName} Rating`}/>
                : ''
            }
        </InteractiveCard>
    );
}