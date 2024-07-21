import { useEffect } from "react"
import useConversation from "../../zustand/useConversation.jsx"
import MessageInput from "./MessageInput.jsx"
import Messages from "./Messages.jsx"
import {TiMessages} from "react-icons/ti"

const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation} = useConversation();

    useEffect(() => {
      //to reload the message window whenver we log in again
      return() => setSelectedConversation(null)
    },[setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation ? (<NoChatSelected/>) : (
            <>
            {/*Header */}
            <div className="bg-slate-700 px-4 py-2 mb-2">
                <span className="label-text font-semibold">To:</span>{" "}
                <span className="text-slate-200 font-bold">{selectedConversation.fullName}</span>
            </div>
            <Messages/>
            <MessageInput/>
            </>
        )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};



//Starter code
// import MessageInput from "./MessageInput.jsx"
// import Messages from "./Messages.jsx"

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//         {/*Header */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//             <span className="label-text">To:</span>{" "}
//             <span className="text-gray-900 font-bold">John</span>
//         </div>
//         <Messages/>
//         <MessageInput/>
//         </>
//     </div>
//   )
// }

// export default MessageContainer