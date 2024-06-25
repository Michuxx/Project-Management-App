import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ OnCancelProject }) {
  const titleRef = useRef();
  const dueDateRef = useRef();
  const descriptionRef = useRef();

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone"
            onClick={OnCancelProject}
          >
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={titleRef} />
        <Input label="Description" textarea ref={dueDateRef} />
        <Input label="Due Date" ref={descriptionRef} />
      </div>
    </div>
  );
}
