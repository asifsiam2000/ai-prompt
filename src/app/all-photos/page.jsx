import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotos = async ({ searchParams }) => {
    const { category } = await searchParams;
    console.log("category is ", category);
    const res = await fetch('https://ai-prompt-lemon-seven.vercel.app/data.json');
    const photos = await res.json();


    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos;


    
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">All Photos </h1>
            <Category></Category>
            <div className="grid grid-cols-4 gap-5">
                {
                    filteredPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotos;