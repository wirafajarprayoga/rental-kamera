import React from "react";
import { Link, Head } from '@inertiajs/react';
import Box from "@/Components/Box";


const Home = () => {
    return (
        <div className="border flex ">
            <Head title="Home" />
            <div className="border w-1/5 p-14">
                <h1 className="text-2xl font-bold mb-3">Categories</h1>
                <ul className="font-medium">
                    <li className="mb-1">Camera</li>
                    <li>Lensa</li>
                </ul>
            </div>
            <div className="border w-4/5 p-14 grid grid-cols-4 gap-4">
                <Box title={'Kamera 1'}/>
                <Box title={'Kamera 2'}/>
                <Box title={'Kamera 3'}/>
                <Box title={'Kamera 4'}/>
                <Box title={'Kamera 5'}/>
                <Box title={'Kamera 6'}/>
                <Box title={'Kamera 7'}/>
                <Box title={'Kamera 8'}/>
                <Box title={'Kamera 9'}/>
                <Box title={'Kamera 10'}/>
            </div>
        </div>
    )
}
export default Home