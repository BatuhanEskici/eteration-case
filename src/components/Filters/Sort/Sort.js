export default function Sort() {
    return (
        <div>
            <span className="text-sm text-slate-500">Sort By</span>

            <div className="bg-white shadow-md p-3 mt-1">
                <div className="flex items-center">
                    <input type="radio" name="sort" value="Old to new" />

                    <label className="ml-2">Old to new</label>
                </div>

                <div className="flex items-center mt-2">
                    <input type="radio" name="sort" value="New to old" />

                    <label className="ml-2">New to old</label>
                </div>

                <div className="flex items-center mt-2">
                    <input type="radio" name="sort" value="Price high to low" />

                    <label className="ml-2">Price high to low</label>
                </div>

                <div className="flex items-center mt-2">
                    <input type="radio" name="sort" value="Price low to high" />

                    <label className="ml-2">Price low to high</label>
                </div>
            </div>
        </div>
    );
}