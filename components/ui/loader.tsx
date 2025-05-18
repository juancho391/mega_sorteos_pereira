export default function Loader() {
  return (
    <div
      className="w-80 border-1 border-brandYellow h-full rounded-lg flex flex-col items-center px-3 sm:w-full animate-pulse"
      role="status"
      aria-busy="true"
    >
      <div className="flex flex-col w-full sm:flex-row h-full">
        <div className="w-full flex flex-col items-center sm:items-start sm:h-full sm:p-3 sm:gap-10 sm:max-w-[70%]">
          <div className="rounded-full bg-brandGray text-center w-1/2 h-6 content-center mt-5 sm:w-50 sm:h-10"></div>
          <div className="flex my-3 sm:flex-col sm:gap-6">
            <div className="text-center sm:flex sm:flex-col">
              <div className="w-full h-4 bg-brandGray rounded-md"></div>
              <div className="w-full h-4 bg-brandGray rounded-md"></div>
            </div>
            <div className="text-center sm:flex sm:flex-col">
              <div className="w-full h-4 bg-brandGray rounded-md"></div>
              <div className="w-full h-4 bg-brandGray rounded-md"></div>
            </div>
          </div>
          <div className="w-24 h-10 bg-brandGray rounded-md mt-3 sm:max-w-full sm:text-lg"></div>
        </div>
        <div className="relative w-full h-64 mb-5 mt-3 sm:min-h-90 bg-brandGray rounded-lg"></div>
      </div>
      <div className="h-50 w-full flex flex-col items-center p-2">
        <div className="w-3/4 h-8 bg-brandGray rounded-md"></div>
        <div className="h-full w-full flex justify-evenly flex-wrap content-evenly">
          <div className="w-10 h-10 bg-brandGray rounded-full"></div>
          <div className="w-10 h-10 bg-brandGray rounded-full"></div>
          <div className="w-10 h-10 bg-brandGray rounded-full"></div>
        </div>
        <div className="w-full h-7 sm:h-14 bg-brandGray rounded-md mt-3"></div>
      </div>
    </div>
  );
}
