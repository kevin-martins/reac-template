import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { IoAlert, IoCheckmark } from "react-icons/io5";

type NotificationProps = {
  id: number;
  text: string;
  isError: boolean;
};

const Notification = ({ text, id, isError, removeNotif }: NotificationProps & { removeNotif: Function }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, 5000);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white ${isError ? 'bg-red-500' : 'bg-green-500'} pointer-events-auto`}
    >
      {isError
        ? <IoAlert id='error-icon' className="mt-0.5 scale-150" />
        : <IoCheckmark id='valid-icon' className="mt-0.5 scale-150" />
      }
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5 scale-125 hover:text-black duration-300 hover:rotate-90">
        <FiX />
      </button>
    </motion.div>
  );
};

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const removeNotif = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <>
    <div className="space-x-3">
      <button
        onClick={() => {
          setNotifications((prev) => [generateRandomNotif(false), ...prev]);
        }}
        className="text-sm text-white bg-green-500 hover:bg-green-600 active:scale-95 transition-all font-medium px-3 py-2 rounded"
      >
        Success
      </button>
      <button
        onClick={() => {
          setNotifications((prev) => [generateRandomNotif(true), ...prev]);
        }}
        className="text-sm text-white bg-red-500 hover:bg-red-600 active:scale-95 transition-all font-medium px-3 py-2 rounded"
      >
        Errors
      </button>
    </div>
      <div className="flex flex-col gap-1 w-80 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SlideInNotifications;

const generateRandomNotif = (isError: boolean): NotificationProps => {
  const success = [
    "Operation successful!",
    "Success: Data saved.",
    "Great job! Task completed successfully.",
    "Congratulations! You've reached a milestone.",
    "Data updated successfully.",
    "Your form has been submitted successfully."
  ];

  const errors= [
    "Error: Something went wrong.",
    "Oops! An error occurred.",
    "Failed to load data. Please try again later.",
    "Error: Invalid input. Please check your data.",
    "Sorry, there was a problem processing your request.",
    "Failed to submit form. Please check your entries.",
    "Error: Failed to connect to the server."
  ];

  const randomIndex = Math.floor(Math.random() * (isError ? errors.length : success.length));
  if (isError) {
    return {
      id: Math.random(),
      text: errors[randomIndex],
      isError
    };
  };
  return {
    id: Math.random(),
    text: success[randomIndex],
    isError
  };
};