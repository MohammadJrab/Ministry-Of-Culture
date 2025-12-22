import { IconArrowForwardUpDouble } from '@tabler/icons-react';
import React from 'react';
import Image from 'next/image';
interface CulturalPrincipleProps {
    number: string;
    title: string;
    description: string;
    isRtl?: boolean;
}

const CulturalCard: React.FC<CulturalPrincipleProps> = ({
    number,
    title,
    description,
    isRtl = true
}) => {
    return (
        <div

            className="relative flex flex-col p-8 bg-[#F4F6F5] rounded-2xl border border-white shadow-sm font-sans"
        >
            <div className="absolute top-0 left-5 m-0 p-3 rounded-b-md bg-[#3D3D3D] text-white text-sm font-semibold px-2 py-1 ">
                {`0${number}.`}
            </div>

            <div className="absolute top-3 right-3 w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-lg pointer-events-none opacity-50" />

            <div className="mt-12 mb-16 text-center lg:text-start">
                <h3 className="text-xl font-bold  text-[#3D3D3D] mb-4">
                    {title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed text-md font-medium">
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
                <button className="p-2 bg-[#3D3D3D] text-white rounded-md hover:bg-black transition-colors">
                    <IconArrowForwardUpDouble stroke={2} />
                </button>
                <Image src="/svg/egle.svg" alt="arrow" width={40} height={40} />



            </div>
        </div>
    );
};

export default CulturalCard;