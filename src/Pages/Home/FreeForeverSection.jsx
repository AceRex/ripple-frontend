import DOTS from "../../Assets/Images/Frame 25.png";
import AppleIcon from "../../Assets/Images/appleStor.png";
import GooglePlay from "../../Assets/Images/googlePlay.png";
import Techn from "../../Assets/Images/techn.png";

export default function FreeForeverSection() {
  return (
    <section className="bg-secondaryLight -mx-8">
      <div className="w-[70%] max-[680px]:w-[90%] mx-auto relative">
        <div className="absolute">
          <img src={DOTS} alt="dots" />
        </div>
        <div className="flex max-[680px]:flex-col-reverse py-44">
          <div className="">
            <h2 className="font-headingMd text-6xl max-[680px]:hidden w-[80%] text-dark">
              Free forever <br />
              for your <span className="text-secondary">salary payment</span>
              <p className="font-body mt-8 text-xl">
                Subscribe to the Eazilife today
              </p>
            </h2>
            <h2 className="font-headingMd text-center min-[768px]:hidden max-[680px]:w-[90%] max-[680px]:text-4xl text-5xl w-[80%] m-auto text-dark">
              Free forever for your{" "}
              <span className="text-secondary">salary payment</span>
              <p className="font-body mt-8 text-xl">
                Subscribe to the Eazilife today
              </p>
            </h2>
            <div className="mt-10 flex max-[680px]:gap-x-2 justify-center gap-x-4 lg:justify-start ">
              <button className="rounded-md flex bg-light p-2 max-[680px]:px-2 px-4 text-sm font-semibold text-gray-900 shadow-2xl over:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <img src={AppleIcon} alt="app store" />
                <div>
                  <p className="font-bodyLight">Download on the</p>
                  <p className="font-body text-lg">Appstore</p>
                </div>
              </button>
              <button className="rounded-md flex bg-light p-2 px-4 text-sm font-semibold text-gray-900 shadow-2xl hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <img src={GooglePlay} alt="googleplay" />
                <div>
                  <p className="font-bodyLight">Get on</p>
                  <p className="font-body text-lg">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="relative z-10">
            <div className="bg-secondary min-[1536px]:w-[75%] min-[768px]:w-[85%] max-[680px]:w-[80%] max-[680px]:m-auto overflow-hidden rounded-3xl rounded-bl-[10rem] max-[680px]:mb-10 max-[680px]:rounded-bl-3xl">
              <img
                src={Techn}
                className=" min-[768px]:w-[550px] min-[1536px]:w-[550px] "
              />
            </div>
            <div className="absolute -z-10 border-2 min-[768px]:left-8 left-10 min-[768px]:-top-4 -top-2 w-[70%] min-[1536px]:p-48 max-[680px]:hidden min-[768px]:px-48 min-[768px]:py-[13rem] min-[1536px]:py-[13rem] rounded-3xl border-secondary rounded-bl-[10rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
