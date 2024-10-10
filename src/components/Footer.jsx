function Footer({ footer, header }) {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={header.logo} className="h-20 w-20" alt="logo" />
          <span className="ml-3 text-xl">{header.title}</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          {footer.copyright}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {footer.links.map((data) => (
            <a key={data.id} className="ml-3 text-gray-500">
              {data.title}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}


export default Footer;