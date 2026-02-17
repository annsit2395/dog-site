import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Care({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    const tips = [
        {
            title: dictionary.care.nutrition.title,
            content: dictionary.care.nutrition.desc,
            icon: "🍖",
        },
        {
            title: dictionary.care.exercise.title,
            content: dictionary.care.exercise.desc,
            icon: "🎾",
        },
        {
            title: dictionary.care.grooming.title,
            content: dictionary.care.grooming.desc,
            icon: "✂️",
        },
        {
            title: dictionary.care.checkups.title,
            content: dictionary.care.checkups.desc,
            icon: "🩺",
        },
    ];

    return (
        <div className="space-y-12">
            <div className="py-[50px] text-center space-y-4">
                <h1 className="text-4xl font-bold text-green-700">{dictionary.care.title}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {dictionary.care.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tips.map((tip) => (
                    <div key={tip.title} className="p-8 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-stone-50 border-stone-100 group">
                        <div className="text-4xl flex-shrink-0 bg-white p-3 rounded-full h-16 w-16 flex items-center justify-center shadow-sm mx-auto mb-8">
                            {tip.icon}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-green-800 mb-2">{tip.title}</h2>
                            <p className="text-slate-700 leading-relaxed">{tip.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-green-600 text-white p-8 rounded-2xl shadow-lg text-center mt-8">
                <h2 className="text-3xl font-bold mb-4">{dictionary.care.love.title}</h2>
                <p className="text-lg opacity-90 max-w-3xl mx-auto">
                    {dictionary.care.love.desc}
                </p>
            </div>
        </div>
    );
}
