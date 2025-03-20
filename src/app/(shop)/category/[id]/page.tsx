import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string; 
  }
}

export default function({params }: Props) {  

  const { id } = params;

  if (id === "consoles") {
    notFound();
  }
    return ( <>
      <div className="">
        <h1>Category Page { id }</h1>
      </div>
        </>
    )
}   