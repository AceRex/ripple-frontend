import LogoDark from "../../Assets/Images/LogoDark.png";

export default function Footer() {
  return (
    <footer>
      <div className="grid max-[680px]:hidden grid-cols-3 gap-4 px-44 py-24 border-t border-[#dfdfdf] text-dark">
        <div className="col-span-1 max-[680px]: max-[680px]:w-[98%] min-[768px]:w-[55%] ">
          <img src={LogoDark} alt="logo-dark" className="mb-9" />
          <p className="font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
            Copyright © 2023 Eazipay. All rights reserved
          </p>
          <div className="flex justify-between">
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/20/515251/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </div>
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/20/515251/twitter--v1.png"
                alt="twitter--v1"
              />
            </div>
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/20/515251/linkedin-2--v1.png"
                alt="linkedin-2--v1"
              />
            </div>
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/20/515251/facebook-f.png"
                alt="facebook-f"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-row gap-4">
          <div className="basis-1/4">
            <p className="font-bodyBold text-xl mb-5">Product</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">Individual</li>
              <li className="mb-3">businesses</li>
              <li className="mb-3">Request Demo</li>
              <li className="mb-3">Pricing</li>
            </ul>
          </div>
          <div className="basis-1/4">
            <p className="font-bodyBold text-xl mb-5">Legal</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">Privacy Policy</li>
              <li className="mb-3">Terms of Service</li>
            </ul>
          </div>
          <div className="basis-1/4">
            <p className="font-bodyBold text-xl mb-5">Resources</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">FAQs</li>
              <li className="mb-3">Blog</li>
              <li className="mb-3">Career</li>
              <li className="mb-3">Customer stories</li>
            </ul>
          </div>
          <div className="basis-1/4">
            <p className="font-bodyBold text-xl mb-5">Contact us</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">eazipay@gmail.com</li>
              <li className="mb-3">+234 816 878 9518</li>
              <li className="mb-3 flex bg-[#dfdfdf] p-2 rounded-lg w-[100%]">
                <input
                  type="email"
                  name="email"
                  className="bg-[#dfdfdf] w-[90%]"
                  placeholder="Your email Address"
                />
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/pulsar-line/20/515251/sent.png"
                  alt="sent"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-[768px]:hidden px-10 py-12 border-t border-[#dfdfdf] text-dark">
    
        <div className="flex flex-col">
          <div className="basis-1/2">
            <p className="font-bodyBold text-xl mb-5">Product</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">Individual</li>
              <li className="mb-3">businesses</li>
              <li className="mb-3">Request Demo</li>
              <li className="mb-3">Pricing</li>
            </ul>
          </div>
          <div className="basis-1/2">
            <p className="font-bodyBold text-xl mb-5">Legal</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">Privacy Policy</li>
              <li className="mb-3">Terms of Service</li>
            </ul>
          </div>
          <div className="basis-1/4">
            <p className="font-bodyBold text-xl mb-5">Resources</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">FAQs</li>
              <li className="mb-3">Blog</li>
              <li className="mb-3">Career</li>
              <li className="mb-3">Customer stories</li>
            </ul>
          </div>
          <div className="basis-1/4">
            <p className="font-bodyBold text-xl mb-5">Contact us</p>
            <ul className="font-body font-body mb-9 max-[680px]:text-sm min-[768px]:text-sm min-[1536px]:text-lg ">
              <li className="mb-3">eazipay@gmail.com</li>
              <li className="mb-3">+234 816 878 9518</li>
              <li className="mb-3 flex bg-[#dfdfdf] p-2 rounded-lg w-[100%]">
                <input
                  type="email"
                  name="email"
                  className="bg-[#dfdfdf] w-[90%]"
                  placeholder="Your email Address"
                />
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/pulsar-line/20/515251/sent.png"
                  alt="sent"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[80%] m-auto">
          <img src={LogoDark} alt="logo-dark" className="mb-9 w-[50%] m-auto" />
          <p className="font-body mb-9 text-sm text-center">
            Copyright © 2023 Eazipay. All rights reserved
          </p>
          <div className="flex justify-between w-[60%] m-auto">
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/20/515251/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </div>
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/20/515251/twitter--v1.png"
                alt="twitter--v1"
              />
            </div>
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/20/515251/linkedin-2--v1.png"
                alt="linkedin-2--v1"
              />
            </div>
            <div className="bg-[#dfdfdf] rounded-full p-2">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/20/515251/facebook-f.png"
                alt="facebook-f"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
