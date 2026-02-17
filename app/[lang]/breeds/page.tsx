import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Breeds({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    const breeds = [
        {
            ...dictionary.breeds.goldenRetriever,
            image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=600&auto=format&fit=crop",
            color: "bg-yellow-50 border-yellow-100",
        },
        {
            ...dictionary.breeds.germanShepherd,
            image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=600&auto=format&fit=crop",
            color: "bg-stone-50 border-stone-100",
        },
        {
            ...dictionary.breeds.labrador,
            image: "https://i.pinimg.com/736x/30/94/36/309436cb272533d49ff3e53b6328c042.jpg",
            color: "bg-amber-50 border-amber-100",
        },
        {
            ...dictionary.breeds.bulldog,
            image: "https://i.pinimg.com/736x/05/e2/68/05e268d41ea7dd523efdc7772e31f153.jpg",
            color: "bg-gray-50 border-gray-100",
        },
        {
            ...dictionary.breeds.beagle,
            image: "https://i.pinimg.com/736x/f0/ed/70/f0ed70de034fe1d8b2ca3f22d490af8e.jpg",
            color: "bg-orange-50 border-orange-100",
        },
    ];

    return (
        <div className="space-y-8">
            <div className="py-[50px] text-center space-y-4">
                <h1 className="text-[30px] font-bold text-green-700">{dictionary.breeds.title}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {dictionary.breeds.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {breeds.map((breed) => (
                    <div key={breed.name} className={`rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${breed.color} group`}>
                        <div className="relative h-96 w-full overflow-hidden">
                            <Image
                                src={breed.image}
                                alt={breed.name}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500 bg-gray-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-3 text-gray-800">{breed.name}</h2>
                            <p className="text-gray-600 leading-relaxed">{breed.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
