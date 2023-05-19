export default function Brands({ className }) {
    return (
        <div className={`${className} pr-6`}>
            <span className="text-sm text-slate-500">Model</span>

            <div className="bg-white shadow-md p-3 mt-1">
                <input type="text" placeholder="Search" className="p-1 mb-3 bg-[#F9F9F9]" />

                <div className="max-h-[88px] overflow-auto">
                    <div className="flex items-center">
                        <input type="checkbox" name="model" value="11" />

                        <label className="ml-2">11</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="model" value="12 Pro" />

                        <label className="ml-2">12 Pro</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="model" value="13 Pro Max" />

                        <label className="ml-2">13 Pro Max</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="model" value="13 Pro Max" />

                        <label className="ml-2">13 Pro Max</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="model" value="13 Pro Max" />

                        <label className="ml-2">13 Pro Max</label>
                    </div>
                </div>
            </div>
        </div>
    )
}