import { USER_CONFIG } from "@/config/user";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <img
        src="/avatar-24.png"
        className="w-48 h-48 rounded-full shadow-lg my-4"
        alt="user profile image"
      />
      <h1 className="text-3xl font-bold text-indigo-800">
        {USER_CONFIG.title}
      </h1>
      <p className="text-xl text-gray-500">@{USER_CONFIG.username}</p>
      <p className="text-l mt-4">{USER_CONFIG.description}</p>
    </section>
  );
};
