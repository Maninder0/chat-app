import { MdOutlineManageSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
        <button type="submit" className="btn btn-circle border-none bg-blue-500 text-white">
            <MdOutlineManageSearch className="w-7 h-7 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput




//Starter code
// import { MdOutlineManageSearch } from "react-icons/md";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
//         <button type="submit" className="btn btn-circle border-none bg-sky-500 text-white">
//             <MdOutlineManageSearch className="w-7 h-7 outline-none"/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput