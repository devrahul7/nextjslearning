export default async function Page({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <div>This is Slug :{slug} </div>
    );
}