import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import { i18n, Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-green-700">{dictionary.home.title}</h1>
        <p className="text-xl text-gray-700 max-w-2xl">
          {dictionary.home.subtitle}
        </p>
      </div>

      <div className="relative w-full max-w-5xl h-80 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop"
          alt="Golden Retriever running in park"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link href={`/${lang}/breeds`} className="group block p-6 bg-white rounded-lg border border-green-100 shadow-md hover:shadow-lg hover:border-green-300 transition">
          <h2 className="text-2xl font-bold text-green-600 mb-2 group-hover:text-green-700">{dictionary.home.breedsTitle} &rarr;</h2>
          <p className="text-gray-600">{dictionary.home.breedsDesc}</p>
        </Link>
        <Link href={`/${lang}/care`} className="group block p-6 bg-white rounded-lg border-green-100 border shadow-md hover:shadow-lg hover:border-green-300 transition">
          <h2 className="text-2xl font-bold text-green-600 mb-2 group-hover:text-green-700">{dictionary.home.careTitle} &rarr;</h2>
          <p className="text-gray-600">{dictionary.home.careDesc}</p>
        </Link>
      </div>
    </div>
  );
}
