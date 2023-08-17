import Onboarding from "../../Assets/Images/onboarding.gif";
import AddEmployee from "../../Assets/Images/addemployee.gif";
import PayRoll from "../../Assets/Images/payroll.gif";
import { useEffect, useState } from "react";

export default function HowItWorks() {
  const [currentView, setCurrentView] = useState("view1");

  useEffect(() => {
    switch (currentView) {
      case "view1":
        setTimeout(() => {
          setCurrentView("view2");
        }, 40000);
        break;
      case "view2":
        setTimeout(() => {
          setCurrentView("view3");
        }, 10000);
        break;
      case "view3":
        setTimeout(() => {
          setCurrentView("view1");
        }, 10000);
        break;
      default:
        break;
    }
  }, [currentView]);

  return (
    <section className="py-24">
      <div className="w-[90%] m-auto text-center max-[680px]:mb-7 min-[768px]:mb-24">
        <h2 className="font-headingMd text-4xl sm:text-6xl text-primary mb-2 sm:mb-4">
          How Eazipay Works
        </h2>
        <p className="font-body text-dark text-md sm:text-xl">
          Get started in 3 simple steps.
        </p>
      </div>
      <div className="w-[90%] m-auto relative">
        <div className="min-[768px]:flex max-[680px]:block max-[680px]:m-auto max-[768px]:w-[45%] min-[768px]:w-[90%] m-auto z-10 justify-between">
          <div className=" rounded-[3.2rem] m-auto overflow-hidden max-[680px]:m-auto min-[768px]:mr-44 min-[1536px]:mr-64">
            {currentView === "view1" ? (
              <img
                src={Onboarding}
                alt="onboarding-process-sample"
                className="max-[680px]:w-[250px] w-[300px]"
              />
            ) : currentView === "view2" ? (
              <img
                src={AddEmployee}
                alt="employee-add-process-sample"
                className="max-[680px]:w-[250px] w-[300px]"
              />
            ) : (
              <img
                src={PayRoll}
                alt="employee-add-process-sample"
                className="max-[680px]:w-[250px] w-[300px]"
              />
            )}
          </div>
          {/* circle */}
          <div className="max-[680px]:hidden rounded-full -z-10 p-[30px] min-[768px]:block min-[1536px]:block min-[1536px]:left-52 border-2 border-primary left-20 top-7 absolute">
            <div className="rounded-full p-[30px] bg-primaryShade">
              <div className="rounded-full p-[200px] bg-primary"></div>
            </div>
          </div>
          <ul className="max-[768px]:hidden block">
            <li className="mb-10">
              <p
                className={
                  currentView === "view1"
                    ? "bg-primary p-3 w-14 rounded-md text-center text-light font-bodyBold text-3xl mb-3"
                    : "bg-light p-5 w-14 rounded-md text-center bg-light text-dark font-bodyBold text-3xl mb-3"
                }
                onClick={() => setCurrentView("view1")}
              >
                1
              </p>
              <p className="font-bodyBold text-xl">Create your free account</p>
              <p>Click here to set up your Eazipay account.</p>
            </li>
            <li className="mb-10">
              <p
                className={
                  currentView === "view2"
                    ? "bg-primary p-3 w-14 rounded-md text-center text-light font-bodyBold text-3xl mb-3"
                    : "bg-light p-3 w-14 rounded-md text-center bg-light text-dark font-bodyBold text-3xl mb-3"
                }
                onClick={() => setCurrentView("view2")}
              >
                2
              </p>
              <p className="font-bodyBold text-xl">Add Employee Data</p>
              <p>Your employee information is 100% safe and secure.</p>
            </li>
            <li className="mb-10">
              <p
                className={
                  currentView === "view3"
                    ? "bg-primary p-3 w-14 rounded-md text-center text-light font-bodyBold text-3xl mb-3"
                    : "bg-light p-3 w-14 rounded-md text-center bg-light text-dark font-bodyBold text-3xl mb-3"
                }
                onClick={() => setCurrentView("view3")}
              >
                3
              </p>
              <p className="font-bodyBold text-xl">Prepare your Transaction</p>
              <p>Run payroll: Bulk Salaries and Compliance are done at once!</p>
            </li>
          </ul>
          <ul className="max-[768px]:block hidden">
            {currentView === "view1" ? (
              <li className="mb-10 -mx-28 mt-5 grid grid-cols-3 gap-4 ">
                <p className="bg-primary p-3 w-14 rounded-md text-center text-light font-bodyBold text-3xl mb-3">
                  1
                </p>
                <div className="col-span-2">
                  <p className="font-bodyBold w-[100%] text-xl">
                    Create your free account
                  </p>
                  <p>Click here to set up your Eazipay account.</p>
                </div>
              </li>
            ) : currentView === "view2" ? (
              <li className="mb-10  -mx-28 mt-5 grid grid-cols-3 gap-4 ">
                <p className="bg-primary p-3 w-14 rounded-md text-center text-light font-bodyBold text-3xl mb-3">
                  2
                </p>
                <div className="col-span-2">
                  <p className="font-bodyBold w-[100%] text-xl">
                    Add Employee Data
                  </p>
                  <p>Your employee information is 100% safe and secure.</p>
                </div>
              </li>
            ) : (
              <li className="mb-10 -mx-28 mt-5 grid grid-cols-3 gap-4 ">
                <p className="bg-primary p-3 w-14 rounded-md text-center text-light font-bodyBold text-3xl mb-3">
                  3
                </p>
                <div className="col-span-2">
                  <p className="font-bodyBold w-[100] text-xl">
                    Prepare your Transaction
                  </p>
                  <p>
                    Run payroll: Bulk Salaries and Compliance are done at once!
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
