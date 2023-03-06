const Footer = () => {
  return (
    <footer className="md:bg-gray-100 bg-white shadow-sm md:shadow-none">
      <div className="container px-4 py-10 mx-auto flex flex-wrap">
        <div className="flex w-full md:w-1/3 ">
          <div className="px-8">
            <h3 className="font-bold text-gray-800">Contact Us</h3>
            <p className="mt-4">123 Main Street</p>
            <p className="">New York, NY 10001</p>
            <p className="mt-4">Phone: (555) 555-5555</p>
            <p className="">Email: info@ecommerce.com</p>
          </div>
        </div>

        <div className="flex w-full md:w-1/3">
          <div className="px-8">
            <h3 className="font-bold text-gray-800">Customer Service</h3>
            <ul className="mt-4">
              <li className="mt-2">
                <a href="/" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li className="mt-2">
                <a href="/" className="hover:text-gray-400">
                  Returns
                </a>
              </li>
              <li className="mt-2">
                <a href="/" className="hover:text-gray-400">
                  Shipping
                </a>
              </li>
              <li className="mt-2">
                <a href="/" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full md:w-1/3">
          <div className="px-8">
            <h3 className="font-bold text-gray-900">Follow Us</h3>
            <div className="mt-4 flex">
              <a href="/" className="mr-4">
                Facebook
              </a>
              <a href="/" className="mr-4">
                Twitter
              </a>
              <a href="/" className="mr-4">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4">
        <div className="container px-4 mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2023 Ecommerce. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
