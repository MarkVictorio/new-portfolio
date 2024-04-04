const Navbar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Projects' },
  ];

  return (
    <div className='bg-[#282f37] flex justify-between items-center h-14 mx-auto p-4 text-white shadow-2xl'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#9373ec]'> Portfolio </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#69448e] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            {item.text}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Navbar;