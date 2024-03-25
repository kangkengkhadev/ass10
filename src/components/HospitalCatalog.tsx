import Link from "next/link"
import Card from "./Card"
import { HospitalItem,HospitalJson } from "../../interface"
export default async function CarCatalog({hospitalsJson} : {hospitalsJson:Promise<HospitalJson>}) {
    const hospitalsJsonReady = await hospitalsJson
    return (
        <>
        Explore {hospitalsJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex", flexDirection:"row",
            flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    hospitalsJsonReady.data.map((hospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5" key={hospitalItem.id}>
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}