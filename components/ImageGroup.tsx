import Image from "next/image";

export default function ImageGroup({images}: { images: string[] }) {
    const counts = images.length;
    return (
        <div className="grid" style={{ gridTemplateColumns: `repeat(${counts > 3 ? 3 : counts}, minmax(0, 1fr))`, gap: '1rem' }}>
            {images.map((image, index) => (
                <div key={index}>
                    <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full rounded-lg m-0"
                    />
                </div>
            ))}
        </div>
    );
}