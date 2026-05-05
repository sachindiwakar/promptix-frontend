import React, { useState } from "react";
import { Eraser, File, Sparkles } from "lucide-react";

const RemoveBackground = () => {
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left Side */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Background Remover</h1>
        </div>
        <label className="mt-6 block text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <File className="w-4 h-4" />
            Upload Image
          </div>

          <div className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-gray-50 transition">
            <span className="text-sm text-gray-500">
              Click to upload or drag & drop
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setInput(e.target.files[0])}
              className="hidden"
              required
            />
          </div>
        </label>

        <button className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Eraser className="w-5" />
          Remove Background
        </button>
      </form>
      {/* Right Side */}
      <div
        className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col
       border border-gray-200 min-h-95"
      >
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        <div className="flex-1 flex  justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Eraser className="w-9 h-9" />
            <p>Upload an image and click "Remove Background" to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
