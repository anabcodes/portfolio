import { Outlet } from "react-router-dom"
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"

function HomeLayout(){
    return(
        <>
            <div className="place-content-center px-5 md:px-20 lg:px-40">
                <Navbar />
                <main className="md:pt-40 pt-25">
                        <Outlet/>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default HomeLayout;