export default function StudentLayout({children}){
    return (
    <>
      <div>
        <h1 className="text-3xl text-center p-2 font-bold bg-blue-400">
          Welcome to the Student Page
        </h1>
        {children}
      </div>
    </> 
    )
}