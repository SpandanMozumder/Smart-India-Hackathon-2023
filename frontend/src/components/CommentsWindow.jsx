import { useState } from "react";

export default function CommentsWindow() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="overflow-y-hidden">
      <button onClick={toggleModal} className="">
        Sync
      </button>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            onClick={toggleModal}
            className="overlay fixed inset-0 bg-black opacity-80"
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 rounded-md max-w-2xl min-w-1/3 text-center">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button
              className="close-modal absolute top-2 right-2 px-2 py-1 bg-gray-300 rounded-md"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
