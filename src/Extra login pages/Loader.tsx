import Image from 'next/image';
import loaderGif from '../Logos/edu.gif';

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <Image src={loaderGif} alt="Loading..." style={{width:'100%' , height:'100%'}} />
        </div>
    );
}
