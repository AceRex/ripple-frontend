import LogoDark from "../../Assets/Images/LogoDark.png";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 gap-4 px-44 py-24 border-t border-[#dfdfdf]">
      <div className="col-span-1 w-[50%]">
        <img src={LogoDark} alt="logo-dark" className="mb-9" />
        <p className="font-body text-md mb-9">
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
          <ul className="font-body text-md">
            <li className="mb-3">Individual</li>
            <li className="mb-3">businesses</li>
            <li className="mb-3">Request Demo</li>
            <li className="mb-3">Pricing</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <p className="font-bodyBold text-xl mb-5">Legal</p>
          <ul className="font-body text-md">
            <li className="mb-3">Privacy Policy</li>
            <li className="mb-3">Terms of Service</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <p className="font-bodyBold text-xl mb-5">Resources</p>
          <ul className="font-body text-md">
            <li className="mb-3">FAQs</li>
            <li className="mb-3">Blog</li>
            <li className="mb-3">Career</li>
            <li className="mb-3">Customer stories</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <p className="font-bodyBold text-xl mb-5">Contact us</p>
          <ul className="font-body text-md">
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
    </footer>
  );
}
