import { Github, Twitter } from "lucide-react";

/**
 * Ferman's Profile Page
 * Design: Brutalist Minimalism
 * - Raw, unadorned typography with extreme whitespace
 * - Monospace fonts for technical credibility
 * - Stark contrast between dark background and light text
 * - Electric cyan accent for links and interactions
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center px-4 py-8">
      <main className="max-w-2xl w-full">
        {/* Avatar */}
        <div className="mb-12 flex justify-center">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ccircle cx='100' cy='70' r='35' fill='%23000'/%3E%3Crect x='70' y='120' width='60' height='50' fill='%238b6914'/%3E%3Crect x='60' y='100' width='80' height='30' fill='%23d4a574'/%3E%3C/svg%3E"
            alt="Ferman's Avatar"
            className="w-32 h-32 rounded-full border-2 border-cyan-400 shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold text-center mb-2 tracking-tight">
          Ferman
        </h1>

        {/* Username */}
        <p className="text-center text-gray-400 mb-8 text-lg">
          @0xh3rman
        </p>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bio */}
        <p className="text-center text-gray-300 mb-12 leading-relaxed">
          Blockchain developer. Building wallets and infrastructure for Web3.
        </p>

        {/* Links Section */}
        <div className="space-y-6 mb-12">
          <a
            href="https://github.com/0xh3rman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <Github size={20} className="group-hover:text-cyan-400" />
            <span className="underline-offset-4 group-hover:underline">
              github.com/0xh3rman
            </span>
          </a>

          <a
            href="https://x.com/0xh3rman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <Twitter size={20} className="group-hover:text-cyan-400" />
            <span className="underline-offset-4 group-hover:underline">
              x.com/0xh3rman
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-cyan-400 text-2xl font-bold">1.1k+</p>
            <p className="text-gray-400 mt-1">Contributions</p>
          </div>
          <div>
            <p className="text-cyan-400 text-2xl font-bold">17</p>
            <p className="text-gray-400 mt-1">Repositories</p>
          </div>
          <div>
            <p className="text-cyan-400 text-2xl font-bold">138</p>
            <p className="text-gray-400 mt-1">Stars</p>
          </div>
        </div>
      </main>
    </div>
  );
}
