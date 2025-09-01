import { Home } from "./components/Home";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="bg-[#0D0D0D] h-48 flex items-center justify-center">
        <div className="flex flex-row gap-3 items-center justify-center">
          <img src="/rocket.svg" alt="My Icon" width={22} height={36} />
          <article className="prose prose-strong:font-black flex items-center m-0 p-0">
            <h1 className="!font-black text-[#4EA8DE] m-0 leading-none">Todo <span className="text-[#5E60CE]">App</span></h1>
          </article>
        </div>
      </div>

      <Home />
    </div>
  );
}
