import { IconArrowForwardUpDouble } from '@tabler/icons-react';
import React from 'react';
interface CulturalPrincipleProps {
    number: string;
    title: string;
    description: string;
}

const CulturalCard: React.FC<CulturalPrincipleProps> = ({
    number,
    title,
    description,
}) => {
    return (
        <div
            className="group relative max-w-80 md:max-w-96 flex flex-col p-8 bg-[#F4F6F5] rounded-2xl border border-white shadow-sm font-sans overflow-hidden transition-all duration-500"
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url('/images/CulturalPrinciple${number}.${['1', '5'].includes(number) ? 'png' : 'jpg'}')` }}
            />
            <div className="absolute inset-0 bg-[#143D49DE] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div id='cultural-number' className="z-10 absolute top-0 left-5 m-0 py-2 px-2 rounded-b-md bg-[#3D3D3D] text-white text-sm font-semibold  group-hover:bg-[#428177] group-hover:text-white transition-colors duration-500">
                {`0${number}.`}
            </div>

            <div className="absolute top-3 right-3 w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-lg pointer-events-none opacity-50 z-10" />

            <div className="relative z-10 mt-12 mb-16  lg:text-start">
                <h3 id="cultural-title" className="text-2xl  font-bold text-[#3D3D3D] mb-4 group-hover:text-[#B9A779] transition-colors duration-500">
                    {title}
                </h3>
                <p id="cultural-description" className="text-start text-[#6B6B6B] leading-relaxed text-lg md:text-md font-medium group-hover:text-white transition-colors duration-500">
                    {description}
                </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-auto">
                <div id="cultural-arrow" className="p-2 bg-[#3D3D3D] text-white rounded-md transition-colors duration-500 group-hover:bg-[#428177]">
                    <IconArrowForwardUpDouble stroke={2} />
                </div>
                <div
                    id="cultural-egle"
                    className="size-12 bg-[#988561] group-hover:bg-[#EDEBE0] transition-colors duration-500"
                    style={{
                        maskImage: "url('/svg/egle.svg')",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: "url('/svg/egle.svg')",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                    }}
                />
            </div>
        </div>
    );
};

export default CulturalCard;