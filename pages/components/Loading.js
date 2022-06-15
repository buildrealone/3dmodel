const Loading = () => {
    return (
        <div className="flex items-center justify-center fixed w-full h-full">
            <div className="w-1/2 mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-md ring-1 ring-black ring-opacity-5 transition-all">
                <button 
                    className="bg-white w-full rounded-md border-0 px-4 py-2.5 font-medium text-md text-rose-500"
                    disabled
                >
                    Loading...
                </button>
            </div>
      </div>
    )
};

export default Loading;