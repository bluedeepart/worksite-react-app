function Nav() {
  return (
    <nav className="lg:flex lg:justify-center lg:w-2/4 hidden">
      <ul className="lg:flex">
        <li className="">
          <a
            href="/"
            className="px-4 py-1 block text-text_color hover:text-white"
          >
            Find a job
          </a>
        </li>
        <li className="">
          <a
            href="/"
            className="px-4 py-1 block text-text_color hover:text-white"
          >
            Submit a job
          </a>
        </li>
        <li className="">
          <a
            href="/"
            className="px-4 py-1 block text-text_color hover:text-white"
          >
            Sponsor us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
