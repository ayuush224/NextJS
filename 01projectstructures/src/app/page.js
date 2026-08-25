export default function Home() {
  let error = false;
  if(error){
    throw new Error("Some error happend");
  }
  
  return (
    <>
      <div>
        <h1 className="text-3xl text-center p-2 font-bold bg-blue-400">
          Welcome to the next.js
        </h1>
      </div>
    </>
  );
}
