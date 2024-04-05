import { useState } from "react";
import SpringModal from "../components/modal/SpringModal";
import Wrapper from "../components/Wrapper";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Open Modal
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const ModalPage = () => {
  return (
    <div>
      <Wrapper title='Modal'>
        <ExampleWrapper />
      </Wrapper>
    </div>
  );
};

export default ModalPage;
