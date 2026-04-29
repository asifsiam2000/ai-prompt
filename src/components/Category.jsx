import { Button } from "@heroui/react";
import Link from "next/link";


const Category = async () => {
    const res = await fetch('https://ai-prompt-lemon-seven.vercel.app/category.json');
    const categorys = await res.json();
    console.log("hima", categorys);
    return (
        <div className="my-5 space-x-1">
            {
                categorys.map(category =><Link key={category.id} href={`/all-photos?category=${category.name.toLowerCase()}`}>
                 <Button variant="outline"  className="mr-1">{ category.name}</Button>
                </Link>

                )
            }
        </div>
    );
};

export default Category;