import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ OnCancelProject, onAdd }) {
  const titleRef = useRef();
  const dueDateRef = useRef();
  const descriptionRef = useRef();

  const [errored, isErrored] = useState(false);

  const handleSave = () => {
    const enteredTitleRef = titleRef.current.value;
    const enteredDueDateRef = dueDateRef.current.value;
    const enteredDescriptionRef = descriptionRef.current.value;

    if (
      enteredTitleRef.trim() === "" ||
      enteredDescriptionRef.trim() === "" ||
      enteredDueDateRef.trim() === ""
    ) {
      isErrored(true);
      return;
    }

    onAdd({
      title: enteredTitleRef,
      description: enteredDescriptionRef,
      dueDate: enteredDueDateRef,
    });
  };

  return (
    <section>
      {errored ? (
        <Modal
          onClose={() => {
            isErrored(false);
          }}
        >
          <h2 className="text-xl font-bold text-stone-800 my-4">
            Invalid input
          </h2>
          <p className="text-stone-600 mb-4">
            {" "}
            Oops ... looks like you forgot to enter a value.
          </p>
          <p className="text-stone-600 mb-4">
            Please make sure you provide a valid value for every field
          </p>
        </Modal>
      ) : null}
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
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </section>
  );
}
