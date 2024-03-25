import Image from "next/image"
import getHospital from "@/libs/getHospital";

export default async function CardDetailPage({params} : {params: {hid:string}}) {
    
    const hospitalDetail = await getHospital(params.hid)

    // const mockCardRepo = new Map();
    // mockCardRepo.set("001", {name: "Chulalongkorn Hospital", image: "/img/chula.jpg"});
    // mockCardRepo.set("002", {name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"});
    // mockCardRepo.set("003", {name: "Thammasat University Hospital", image: "/img/thammasat.jpg"});

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Hospital ID {params.hid}</h1>
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture}
                alt='Hospital Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">{hospitalDetail.data.name}
                    <div className="text-md mx-5">Address: {hospitalDetail.data.address}</div>
                    <div className="text-md mx-5">Tel: {hospitalDetail.data.tel}</div>
                </div>
            </div>
        </main>
    );
}

// export async function generateStaticParams() {
//     return [{cid:'001'}, {cid:'002'}, {cid:'003'}, {cid:'004'}];
// }