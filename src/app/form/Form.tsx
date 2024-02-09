"use client";
import { FC, useState } from "react";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const [value, setValue] = useState("");

  return (
    <form>
      <input
        placeholder="example"
        className="text-black h-10 rounded-md"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        className="bg-black disabled:bg-gray-500 p-2.5 rounded-md"
        disabled={value === ""}
        onClick={() => setValue("")}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
