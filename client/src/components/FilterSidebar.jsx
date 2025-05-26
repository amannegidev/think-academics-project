
import { useState } from 'react'

const subCategories = [
  { name: `men's`, href: '#' },
  { name: 'women', href: '#' },
  { name: 'kids', href: '#' },
  { name: 'jewelry', href: '#' },
  { name: 'shoes', href: '#' },
  { name: 'accesories', href: '#' },
  { name: 'skincare', href: '#' },
  { name: 'makeup', href: '#' },
  { name: 'fragrance', href: '#' },
  
]

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: ['White', 'Beige', 'Blue', 'Brown', 'Green', 'Purple'],
  },
  {
    id: 'category',
    name: 'Category',
    options: ['New Arrivals', 'Sale', 'Travel', 'Organization', 'Accessories'],
  },
  {
    id: 'size',
    name: 'Size',
    options: ['2L', '6L', '12L', '18L', '20L', '40L'],
  },
]

export default function CategorySidebar() {
  const [openSections, setOpenSections] = useState({})
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const SidebarContent = () => (
    <div className="w-full px-10 lg:px-20 py-5 bg-white  min-h-screen ">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {subCategories.map((cat) => (
          <li key={cat.name}>
            <a href={cat.href} className="block text-lg text-gray-700 hover:text-black">
              {cat.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-4">
        {filters.map((filter) => (
          <div key={filter.id} className="border-t pt-4">
            <button
              onClick={() => toggleSection(filter.id)}
              className="flex w-full items-center justify-between text-lg font-medium text-black- hover:text-gray-700"
            >
              <span className=''>{filter.name}</span>
              <i
                className={`bi ${openSections[filter.id] ? 'bi-dash' : 'bi-plus'}`}
              ></i>
            </button>
            {openSections[filter.id] && (
              <div className="mt-2 pl-2 space-y-1">
                {filter.options.map((option, idx) => (
                  <label key={idx} className="flex items-center space-x-2 text-gray-600">
                    <input type="checkbox" className="form-checkbox" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden p-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-700 border px-3 py-1 rounded-md flex items-center gap-2"
        >
          <i className="bi bi-filter"></i>
          Filters
        </button>
      </div>

      {/* Sidebar - mobile and desktop */}
      <aside>
        {/* Desktop sidebar */}
        <div className="hidden lg:block">{SidebarContent()}</div>

        {/* Mobile sidebar */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
            <div className="bg-white w-64 h-full p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-black"
                >
                  <i className="bi bi-x-lg text-xl"></i>
                </button>
              </div>
              {SidebarContent()}
            </div>
            <div className="flex-grow" onClick={() => setMobileOpen(false)}></div>
          </div>
        )}
      </aside>
    </>
  )
}
