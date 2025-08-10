import Image from "next/image";
import { GeneratedImageProps } from "@/interfaces";
import { WIDTH, HEIGHT } from "@/constants";



const ImageCard: React.FC<GeneratedImageProps> = ({
    imageUrl,
    prompt,
    width,
    action
}) => {
    return (
        <div onClick={() => action(imageUrl)} className="mt-6 border border-neutral-300 rounded-xl p-2 hover:cursor-pointer">
            <Image
                src={imageUrl} 
                alt={prompt} 
                className={`w-full max-w-md rounded-lg shadow-lg`} 
                width={WIDTH}
                height={HEIGHT}
            />
            <h2 
                className={`${width ? 'text-sm' : 'text-xl'} font-semibold mt-2`}
            >
                Your Prompt:
            </h2>
            <p 
                className={`${width ? 'text-xs' : 'text-lg'} text-gray-700 mb-4`}
            >
                {prompt}
            </p>
        </div>
    )
}


export default ImageCard;