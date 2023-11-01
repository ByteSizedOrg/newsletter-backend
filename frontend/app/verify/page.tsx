"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const email = searchParams.get("email");
    fetch(`https://bashcatbackend.fly.dev/confirm?email=${email}&name=bruh`, {
      method: "PUT",
    });
  }, []);
  return (
    <div className="bg-slate-900 w-screen h-screen text-white">
      <Navbar />
      <div className="h-[90vh] flex items-center justify-center">
        <div className="w-1/4">
          <p className=" text-center font-medium text-lg">
            You have been verified!🚀🚀
          </p>
        </div>
      </div>
    </div>
  );
}
