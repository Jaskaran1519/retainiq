// Notification.tsx
import { motion } from "framer-motion";
import { useEffect } from "react";

interface NotificationProps {
  message: string;
  onDismiss: () => void;
}

const Notification = ({ message, onDismiss }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 2000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 flex justify-center z-50"
    >
      <div className="bg-gray-900 text-white py-2 px-4 rounded-lg shadow-md">
        {message}
      </div>
    </motion.div>
  );
};

export default Notification;
