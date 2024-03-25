import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import HospitalCatalog from "@/components/HospitalCatalog";

export default function Car() {

    const hospitals = getHospitals()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
            <Suspense fallback={ <p>Loading  ... <LinearProgress/></p> }>
                <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
        </main>
    );
}