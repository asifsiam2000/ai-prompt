import PhotoCard from "@/components/PhotoCard";

const AllPhotos = async () => {
    const res = await fetch('https://ai-prompt-lemon-seven.vercel.app/data.json');
    const photos = await res.json();
    console.log(photos);
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">All Photos </h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotos;