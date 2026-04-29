import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaHeart } from "react-icons/fa";


const PhotoCard = ({photo}) => {
    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image src={photo.imageUrl} alt="photo" fill className="rounded-xl object-cover"></Image>
                <Chip className="absolute right-2 top-2 " size="sm">{photo.category}</Chip>
            </div>
            <div>
                <h2 className="font-medium">{photo.title}</h2>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                <p className="text-red-500"><FaHeart /></p>
                <p>{photo.likes}</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-blue-500-500"><FaArrowDown /></p>
                <p>{photo.downloads}</p>
            </div>
            </div>
            <Link href={`/all-photos/${photo.id}`}>
                <Button className='w-full' variant="outline">view Details</Button>
            </Link>
        </Card>
    );
};

export default PhotoCard;