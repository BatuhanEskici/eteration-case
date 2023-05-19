export default function Brands({ className }) {
    return (
        <div className={`${className}`}>
            <span className="text-sm text-slate-500">Brands</span>

            <div className="bg-white shadow-md p-3 mt-1">
                <input type="text" placeholder="Search" className="p-1 mb-3 bg-[#F9F9F9]" />

                <div className="max-h-[88px] overflow-auto">
                    <div className="flex items-center">
                        <input type="checkbox" name="brand" value="Apple" />

                        <label className="ml-2">Apple</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="brand" value="Samsung" />

                        <label className="ml-2">Samsung</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="brand" value="Huawei" />

                        <label className="ml-2">Huawei</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="brand" value="Huawei" />

                        <label className="ml-2">Huawei</label>
                    </div>

                    <div className="flex items-center mt-2">
                        <input type="checkbox" name="brand" value="Huawei" />

                        <label className="ml-2">Huawei</label>
                    </div>
                </div>
            </div>
        </div>
    )
}