"use client";

export default function RootError({error, reset}){
    return (
        <>
            <div className="h-screen w-full bg-black text-white flex flex-col items-center">
                <h1 className="text-3xl text-center p-2 font-bold bg-blue-400 w-full">
                Some error happened in the home page
                </h1>
                <p className="text-center text-red-500 p-3">
                {error.message}
                </p>
                <button 
                    onClick={() => reset()}
                    className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer w-25"
                >
                    Try again
                </button>
            </div>
      </>
    )
}