import HomeIndex from "@/components/home/HomeIndex";

type Props = {
  params: Promise<{ lang: string }>;
};
export default async function Home({params}:Props) {
  const { lang } = await params;
  return <HomeIndex lang={lang} />;
}
