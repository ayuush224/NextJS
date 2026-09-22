import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home(){
  return(
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-center p-2 text-3xl font-bold">
        ShadCN
      </h1>
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 my-3 rounded cursor-pointer">
        Test Button
      </button>
      <Button 
        className={"cursor-pointer"}
        variant={"chai"}
        size={"lg"}
      >
        Chai Button
      </Button>
      <Button
        className={"cursor-pointer"}
        variant={"outline"}
        size={"lg"}
      >
        Shadcn Button
      </Button>
    </main>
  );
}