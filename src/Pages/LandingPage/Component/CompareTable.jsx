import React from "react";

export default function CompareTable() {
  return (
    <section className="flex justify-center items-center mt-[8rem] flex-col p-6">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black text-balance py-6">
        What Makes Us Different?
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center rounded-lg mt-12 p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex items-center justify-center p-1 bg-gradient-to-r from-[#A83AFF] to-[#FF8A00] rounded-lg shadow-lg w-full lg:w-[60%] transform transition-transform hover:scale-105">
          <div className="flex flex-col h-full w-full bg-[#f2f8fd] justify-center items-center p-6 rounded-lg">
            <h2 className="text-2xl font-semibold pt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#A83AFF] to-[#FF8A00]">
              Pexiflow
            </h2>
            <table className="text-[#4c4c4c] text-lg w-full mt-6">
              <tbody>
                <tr className="border-t border-b">
                  <td className="py-4 px-2 text-center">
                    Easily accessible by mobile and on the Web
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center">
                    Host your portfolio within seconds
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center">
                    One-stop solution for all your portfolio requirements
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center">
                    Freelance kit solution with several useful resources
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center">
                    An exclusive skill house section to attend sessions
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center">
                    Create case studies to flaunt your skill set
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center">
                    No maintenance and updation hassles
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center">
                    Change the entire portfolio with just a few clicks
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="opacity-50 relative flex items-center justify-center bg-[#f2f8fd] p-1 rounded-lg shadow-lg w-full lg:w-[60%] transform transition-transform hover:scale-105">
          {/* <div className="absolute bg-black h-full w-full opacity-40 rounded-lg"></div> */}
          <div className="flex flex-col h-full w-full bg-[#f2f8fd] justify-center items-center p-6 rounded-lg">
            <h2 className="text-xl font-semibold pt-1">Others</h2>
            <table className="text-[#4c4c4c] text-lg w-full mt-6">
              <tbody>
                <tr className="border-t border-b">
                  <td className="py-3 px-2 text-center">
                    Difficult navigation and lack of ease
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 text-center">
                    Complicated and time-consuming hosting processes
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 text-center">
                    Fragmented tools requiring multiple subscriptions
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 text-center">
                    Limited freelance support and resources
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 text-center">
                    Lack of integrated learning and development tools
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 text-center">
                    Lacks built-in features for creating and sharing case
                    studies
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 text-center">
                    Needs frequent maintenance and updates
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 text-center">
                    Complex and manual portfolio updates
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
