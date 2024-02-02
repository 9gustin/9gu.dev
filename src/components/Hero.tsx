import { USER_CONFIG } from "@/config/user";
import { getDBInfo } from "@/services/notion";

export async function Hero() {
  const dbData = await getDBInfo();

  const userData = {
    title: dbData.title ?? USER_CONFIG.title,
    description: dbData.description ?? USER_CONFIG.description,
    tags: dbData.tags,
    emoji: dbData.emoji,
    username: USER_CONFIG.username,
    image: dbData.image,
    cover: dbData.cover,
  };

  return (
    <section className="flex flex-wrap items-center justify-center text-center pt-4 gap-2">
      <img
        src={userData.cover}
        alt="Cover"
        className="w-full h-32 md:h-72 object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2 items-center">
        <img
          src="/avatar-24.png"
          alt="Profile"
          className="w-16 h-16 md:h-24 md:w-24 -mt-12"
        />
        <h1 className="text-2xl font-bold text-indigo-800">{userData.title}</h1>
      </div>
      <p className="text-l w-full">{userData.description}</p>
    </section>
  );
}
