"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-slate-900 w-screen h-screen text-white">
      <Navbar />
      <div className="h-[90vh] flex items-center justify-center">
        <div className="w-1/4">
          <p className=" text-center">
            BashCat🚀: Your go-to source for the latest and freshest tech news
            and job oppurtunities, all delivered in a free newsletter 📰💼
          </p>
          <div className="flex flex-row justify-center space-x-4">
            <input
              type="text"
              className="rounded-lg p-2 text-black"
              placeholder="sam@bashcat.sh"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <button
              onClick={() => {
                console.log(email);
                fetch("https://bashcatbackend.fly.dev/new", {
                  method: "POST",
                  body: JSON.stringify({
                    email: email,
                    name: "bruh",
                  }),
                });
              }}
              className="bg-purple-700 p-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
