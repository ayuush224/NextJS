export default async function StudentId({ params }){
    const { id } = await params;
    return (
    <>
        <p className="text-center p-4 bg-yellow-300 text-black text-xl mt-2 rounded-2xl">
            This is the Student Id page
        </p>
        <p className="text-center">Current Id : {id}</p>
    </>
    )
}