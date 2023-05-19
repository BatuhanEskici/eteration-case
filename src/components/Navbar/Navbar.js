export default function Navbar() {
    return (
        <div className="bg-[#2A59FE] py-1">
            <div className="flex items-center w-4/5 mx-auto">
                <div className="w-1/3 text-white">Eteration</div>

                <div className="w-2/3">
                    <input type="text" placeholder="Search" className="p-1" />
                </div>

                <div className="w-1/3 text-white">
                    <span>117.000</span>

                    <span className="ml-4">Batuhan</span>
                </div>
            </div>
        </div>
    )
}