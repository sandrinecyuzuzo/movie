import logo from './logos.png'

function Navigation() {
  return (
    <nav className="bg-black py-4 sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <img src={logo} alt='logo'/>
          <div className="hidden md:block">
            <div className="flex space-x-6">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/Explorer" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Explorer</a>
              <a href="/News" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>
              <a href="/TV Shows" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">TV Shows</a>
              <a href="/Genre" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Genre</a>
            </div>
          </div>
        </div>
    </div>
    </nav>
  );
}

export default Navigation;
