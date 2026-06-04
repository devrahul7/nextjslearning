import Link from "next/link";

export default function Page() {
    return (
        <div>
            {/* <a href="/example/test/" className="text-blue-500 underline"> go to example Page</a> */}


            <Link href="/example/test/" className="text-blue-500 underline ml-2"> go to example Page with Link</Link>  
            
            {/* link tag just change page doesnot reload whole page just refresh it  */}

        </div>
    );
} 