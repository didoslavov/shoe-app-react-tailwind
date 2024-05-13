const Sidebar = ({ children, isOpen, onClickClose }) => {
  return (
    <>
      <div
        className={`dark:bg-night fixed right-0 top-0 z-50 h-full w-full transform overflow-auto bg-white p-5 font-bold text-black shadow-lg transition duration-200 md:w-[50%] xl:w-[35%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute right-4 top-4 p-2 dark:text-white"
          onClick={onClickClose}
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
    </>
  );
};

export default Sidebar;
