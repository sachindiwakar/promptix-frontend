import { useAuth, useClerk, useUser } from "@clerk/react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const navItems = [
  { id: "dash-6375", to: "/ai", label: "Dashboard", Icon: House },
  {
    id: "write-4821",
    to: "/ai/write-article",
    label: "Write Article",
    Icon: SquarePen,
  },
  { id: "blog-9154", to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  {
    id: "image-2746",
    to: "/ai/generate-images",
    label: "Generate Images",
    Icon: Image,
  },
  {
    id: "bg-8392",
    to: "/ai/remove-background",
    label: "Remove Background",
    Icon: Eraser,
  },
  {
    id: "object-5603",
    to: "/ai/remove-object",
    label: "Remove Object",
    Icon: Scissors,
  },
  {
    id: "resume-1487",
    to: "/ai/review-resume",
    label: "Review Resume",
    Icon: FileText,
  },
  {
    id: "community-7269",
    to: "/ai/community",
    label: "Community",
    Icon: Users,
  },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();

  const { has } = useAuth();

  const hasPremiumPlan = has?.({
    plan: "premium",
  });

  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 border-0 ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} transition-all duration-300 ease-in-out`}
    >
      <div className="m-7 w-full">
        <img
          src={user.imageUrl}
          alt="user avatar"
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="mt-1 text-center">{user.fullName}</h1>
        <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
          {navItems.map(({ to, label, Icon, id }) => (
            <NavLink
              key={id}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-linear-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img
            src={user.imageUrl}
            className="w-8 rounded-full"
            alt="User Avatar"
          />
          <div>
            <h1 className="text-sm font-medium">{user?.fullName}</h1>
            <p className="text-xs text-gray-500">
              {hasPremiumPlan ? "Premium" : "Free"} Plan
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:textt-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
