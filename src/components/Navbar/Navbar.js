export default function Navbar() {
    return (
        <div className="bg-[#2A59FE] py-1">
            <div className="flex items-center w-4/5 mx-auto">
                <div className="w-[20%] text-white pr-6">Eteration</div>

                <div className="w-[60%]">
                    <input type="text" placeholder="Search" className="p-1" />
                </div>

                <div className="w-[20%] text-white pl-6">
                    <span>117.000</span>

                    <span className="ml-4">Batuhan</span>
                </div>
            </div>
        </div>
    );
}