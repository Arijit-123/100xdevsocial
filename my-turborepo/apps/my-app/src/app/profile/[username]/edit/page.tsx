
"use client"
import React, { useState } from "react";
import { Camera } from "lucide-react";




const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");
const [jobexp,setJobexp]=useState<number[]>([]);

function addexp(){
    setJobexp([...jobexp,1]);
}
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="bg-white p-6 shadow-xl rounded-2xl">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
              <img
                src="/avatar.jpg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full shadow-md">
              <Camera size={16} />
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Arijit Karan</h2>
            <p className="text-gray-500">@arijitkaran</p>
            <p className="text-sm text-gray-600 mt-1">
                <input placeholder="egs software dev"></input>
              | <input placeholder="egs AI/ML enthusiast"></input> |  <input placeholder="egs solana dev"></input>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-3 gap-2 border-b">
            <button
              className={`py-2 px-4 text-center font-medium ${
                activeTab === "about"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              className={`py-2 px-4 text-center font-medium ${
                activeTab === "contact"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </button>
            <button
              className={`py-2 px-4 text-center font-medium ${
                activeTab === "settings"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-700">
            {activeTab === "about" && (
                <>

              <p>
                <h3>About Me</h3>
              <textarea className="w-full border border-gray-600 h-2/6" placeholder="write what best describes you"></textarea>
              </p>
              <div className="mt-3">
                <button className="w-32 bg-amber-500 p-2 " onClick={()=>addexp()} >Add experience</button>
                {
                  jobexp.map(()=>(

                    <>
                     <p className="text-[24px]">Job profession 1</p>
                    </>
                  ))
                }
              </div>
              </>
            )}
            {activeTab === "contact" && (
              <div>
                <p><input placeholder="Enter your email"></input></p>
                <p>LinkedIn: linkedin.com/in/arijitkaran</p>
                <p>GitHub: github.com/arijitkaran</p>
              </div>
            )}
            {activeTab === "settings" && (
              <div>
                <p>Account settings and preferences will appear here.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow">
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
