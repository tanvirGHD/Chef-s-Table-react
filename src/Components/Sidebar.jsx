
const Sidebar = ({recipeQueue}) => {
    return (
        <div className="md:w-4/12 border rounded-3xl">
            <p className="text-center text-2xl font-bold my-4">Want ot cook: {recipeQueue.length}</p>
            <hr></hr>
            <div className="overflow-x-auto">
            {/* Want to cook table */}
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {/* row 1 */}
        <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td><button className="bg-green-500 rounded-full font-bold text-lg p-1" >Preparing</button></td>
        </tr>
        </tbody>
    </table>
    {/* Currently cook table */}
    </div>
        </div>
    );
};

export default Sidebar;