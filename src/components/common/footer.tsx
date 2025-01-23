import Logo from './logo';

export default function Footer() {
  return (
    <div className="pb-16 lg:pb-0 xl:pb-0 bg-gray-200">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
          
          {/* Company Section */}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">Company</h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="/about-us">About Us</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="/contact-us">Contact Us</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="#">Careers</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="#">Latest News</a>
              </li>
            </ul>
          </div>

          {/* Latest News Section */}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">Latest News</h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="/search?category=fish-meat">Fish & Meat</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="/search?category=drinks">Soft Drink</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="/search?category=milk-dairy">Milk & Dairy</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="/search?category=beauty-health">Beauty & Health</a>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">My Account</h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="#">Dashboard</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="#">My Orders</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="#">Recent Orders</a>
              </li>
              <li className="flex items-baseline">
                <a className="text-gray-600 inline-block w-full hover:text-emerald-500" href="#">Update Profile</a>
              </li>
            </ul>
          </div>

          {/* Logo & Contact Info */}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
		  <Logo textCLR='black'/>
            <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
              987 Andre Plain Suite High Street 838, Lake Hestertown, USA
              <br />
              <span> Tel : 02.356.1666</span>
              <br />
              <span> Email : ccruidk@test.com</span>
            </p>
          </div>
        </div>

        <hr className="hr-line" />

        {/* Bottom Section */}
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
            
            {/* Follow Us Section */}
            <div className="col-span-1">
              <div>
                <span className="text-base leading-7 font-medium block mb-2 pb-0.5">Follow Us</span>
                <ul className="text-sm flex">
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                      href="https://www.facebook.com/"
                    >
                      <svg viewBox="0 0 64 64" width="34" height="34">
                        <circle cx="32" cy="32" r="31" fill="#3b5998"></circle>
                        <path
                          d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>

                  {/* Repeat similar blocks for other social links */}
                  
                </ul>
              </div>
            </div>

            {/* Call Us Section */}
            <div className="col-span-1 text-center hidden lg:block md:block">
              <div>
                <p className="text-base leading-7 font-medium block">Call Us Today!</p>
                <h5 className="text-2xl font-bold text-emerald-500 leading-7">+6599887766</h5>
              </div>
            </div>

            {/* Payment Logos */}
            <div className="col-span-1 hidden lg:block md:block">
              <ul className="lg:text-right">
                <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  {/* <Image
                    alt="payment method"
                    loading="lazy"
                    width="274"
                    height="85"
                    src="https://res.cloudinary.com/ahossain/image/upload/v1697688607/settings/payment-logo_qhslgz.webp"
                  /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
        <p className="text-sm text-gray-500 leading-6">
          Copyright 2024 @{' '}
          <a target="_blank" rel="noopener noreferrer" className="text-emerald-500" href="https://themeforest.net/user/htmllover">
            HtmlLover
          </a>, All rights reserved.
        </p>
      </div>
    </div>
  );
}