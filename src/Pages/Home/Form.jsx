import { useState } from "react";
import cirlcle from "../../Assets/Images/FramePrimary.png";

export default function DemoForm() {
  const [currentView, setCurrentView] = useState("individual");
  
  return (
    <section className="relative max-[680px]:px-10 -mx-8 py-64 max-[680px]:px-20 min-[768px]:px-40 -pb-36">
      <div className="max-[680px]:block min-[768px]:flex min-[768px]:flex-row min-[768px]:px-30 min-[1536px]:px-32">
        <div className=" basis-1/2">
          <h2 className="font-headingMd max-[680px]:text-4xl max-[680px]:text-center min-[768px]:text-5xl min-[1536px]:text-6xl text-primary max-[680px]:mb-1 mb-4">
            Get an Exclusive
          </h2>
          <h2 className="font-headingMd max-[680px]:text-4xl max-[680px]:text-center min-[768px]:text-5xl min-[1536px]:text-6xl text-primary mb-4">
            Demo of Eazipay
          </h2>
          <p className="font-body max-[680px]:text-center min-[768px]:text-lg min-[1536px]:text-xl w-[90%] max-[680px]:w-[100%]">
            Our greatest priority is to put you and your business first. Let’s
            show you how we can help.
          </p>
        </div>
        <div className="bg-light basis-1/2 shadow-2xl rounded p-4 max-[680px]:mt-9">
          <h3 className="text-3xl font-bodyBold text-center">
            First things first
          </h3>
          <p className="font-body mt-4 text-center w-[70%] m-auto">
            We want to serve you better. Tell us a bit about yourself or company
          </p>
          <div className=" w-[95%] max-[680px]:w-[100%] rounded-2xl m-auto border border-[#dfdfdf] bg-[#fdfdfd] flex flex-row gap-2 mt-6 p-3">
            <button
              type="button"
              className={
                currentView === "individual"
                  ? "basis-1/2 p-2 bg-primary max-[680px]:text-sm text-light rounded-xl font-bodyBold shadow-xl shadow-dark/30"
                  : "basis-1/2 p-2 bg-[#dfdfdf] max-[680px]:text-sm rounded-xl font-body"
              }
              onClick={() => {
                setCurrentView("individual");
              }}
            >
              Individual
            </button>
            <button
              type="button"
              className={
                currentView === "company"
                  ? "basis-1/2 p-2 bg-primary max-[680px]:text-sm text-light rounded-xl font-bodyBold shadow-xl shadow-dark/30"
                  : "basis-1/2 p-2 bg-[#dfdfdf] max-[680px]:text-sm rounded-xl font-body"
              }
              onClick={() => {
                setCurrentView("company");
              }}
            >
              Company
            </button>
          </div>
          <div>
            {currentView === "individual" ? (
              <form className="py-10 w-[95%] max-[680px]:w-[100%] m-auto">
                <input
                  type="text"
                  name="firstname"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastname"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  name="email"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-primary w-[100%] mx-auto mt-4 p-3 text-light font-body"
                >
                  Request Demo
                </button>
              </form>
            ) : (
              <form className="py-10 w-[95%] m-auto">
                <input
                  type="text"
                  name="firstname"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastname"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  name="email"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="jobTitle"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  name="companySize"
                  className="rounded-xl p-3 w-[100%] mb-3 border border-[#dfdfdf]"
                  placeholder="Company Size"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-primary w-[100%] mx-auto mt-4 p-3 text-light font-body"
                >
                  Request Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="absolute -left-4 top-6">
        <img src={cirlcle} className="w-[300px] max-[680px]:w-[200px]" />{" "}
      </div>
    </section>
  );
}
