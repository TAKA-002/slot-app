export default function Header() {
  return (
    <nav class="bg-gray-100 py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center">
        <div class="flex justify-between items-center">
          <a href="#" class="font-bold text-xl text-indigo-600">
            ROULETTE
          </a>
          <button
            class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
