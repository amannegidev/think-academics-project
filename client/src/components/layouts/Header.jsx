import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContex';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { text: 'New', to: '/new' },
    { text: 'Men', to: '/men' },
    { text: 'Women', to: '/women' },
    { text: 'Kids', to: '/kids' },
    { text: 'hot summer', to: '/summer-collection', badge: 'NEW' },
  ];

  const handleLogout = () => {
    setAuth({ user: null, token: '' });
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <header className="bg-[#FBA518] px-4 sm:px-6 py-2 sticky top-0 z-50">
      <div className="lg:w-11/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="/logo-onlyone.png" alt="Logo" className="h-12 sm:h-14 rounded" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 lg:gap-8 items-center ml-10 lg:ml-38 mr-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm md:text-lg xl:text-xl font-medium whitespace-nowrap hover:text-blue-600 ${
                  isActive ? 'text-white' : 'text-black'
                }`
              }
            >
              <div className="flex items-center gap-1">
                {link.text}
                {link.badge === 'NEW' && (
                  <span className="text-[10px] bg-red-500 text-white px-1.5 rounded-full ml-1">
                    {link.badge}
                  </span>
                )}
              </div>
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden xl:flex items-center bg-gray-100 rounded-full px-4 py-1 w-52">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
            <i className="bi bi-search text-gray-600 ml-2"></i>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Mobile Search */}
            <button onClick={() => setShowSearch(true)} className="xl:hidden">
              <i className="bi bi-search text-xl"></i>
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <i className="bi bi-heart text-xl"></i>
              <span className="absolute -top-1 -right-2 text-[10px] bg-red-500 text-white rounded-full px-1">
                6
              </span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <i className="bi bi-cart text-xl mx-2 md:mx-0"></i>
              <span className="absolute -top-1 -right-2 text-[10px] bg-red-500 text-white rounded-full px-1">
                3
              </span>
            </Link>

            {/* Login or Logout Button - Desktop */}
            {auth?.user ? (
              <button
                onClick={handleLogout}
                className="hidden lg:block bg-gray-100 text-black px-4 py-1.5 rounded-full text-sm hover:bg-white-700"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="hidden lg:block">
                <button className="bg-gray-100 text-black px-4 py-1.5 rounded-full text-sm hover:bg-white-700">
                  Login
                </button>
              </Link>
            )}

            {/* Login or Logout Icon - Mobile */}
            {auth?.user ? (
              <button onClick={handleLogout} className="lg:hidden">
                <i className="bi bi-box-arrow-right text-xl"></i> 
              </button>
            ) : (
              <Link to="/login" className="lg:hidden">
                <i className="bi bi-person text-xl"></i>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(true)}
            >
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transition-transform">
            <div className="flex items-center justify-between p-4 border-b">
              <img src="/logo-onlyone.png" alt="Logo" className="h-10" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <i className="bi bi-x-lg text-xl"></i>
              </button>
            </div>
            <ul className="flex flex-col gap-5 p-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-base font-medium ${
                        isActive ? 'text-blue-600' : 'text-gray-800'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      {link.text}
                      {link.badge === 'NEW' && (
                        <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-4 relative">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-9/12 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
                autoFocus
              />
              <button
                className="p-3 bg-black text-white rounded-full hover:bg-blue-700"
                onClick={() => setShowSearch(false)}
              >
                <i className="bi bi-search "></i>
              </button>
            </div>
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <i className="bi bi-x-lg text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
