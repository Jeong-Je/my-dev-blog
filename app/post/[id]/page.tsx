export default function Page({ params }: { params: { id: number } }) {
    return <div>Post Num : {params.id}</div>
}