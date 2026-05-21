//naparam use garne 

export default async function Page({
    params
}: {
    params: Promise<{  id: string }>;  //here param gets repplaced by folders name
}) {
    const { id } = await params;
    return (
        <div>My Blogs : {id}</div>
    );
}