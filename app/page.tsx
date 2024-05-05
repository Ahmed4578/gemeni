"use client";
import { useChat } from "ai/react";
import { Send } from "lucide-react";
import Image from "next/image";


export default function Home() {
  const { messages, input, handleInputChange, handleSubmit} =
    useChat({
      api: "api/genai",
    });
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/* form element */}
      {RenderForm()}
      {RenderMessages()}
      {/* rendering messages */}
    </main>
  );
  function RenderForm(){
    return <form onSubmit={(event)=>{
       event.preventDefault();
       handleSubmit(event,{
        data:{
          prompt: input

        }
       });
    }} 
    className="w-full flex flex-row gap-2 items-center h-full"
    >
      {/* input */}
      {/* send messages */}
      <input type="text"  placeholder="say something . . . " value={input} onChange={handleInputChange} 
      className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842A0] placeholder:text-[#0842A050] text-right focus:placeholder-transparent"
      />
      <button type="submit"
      className="rounded-full shadow-md border flex flex-row"
      ><Send  className="p-3 h-10 w-10 stroke-stone-500"/></button>

    </form>

  }
  function RenderMessages(){
    return <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitesapce-pre-wrap">
     
        {messages.map((m, index)=>{
         return  <div className={`p-4 shadow-md rounded-md ${
           m.role === 'user' ? "bg-stone-300" : ""
          }`}>
           {m.content}
          </div>
       })}
    </div>
  }
}
