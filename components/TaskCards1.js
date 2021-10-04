function TaskCards1() {
    return (
        <div class="grid grid-cols-4 border-2 border-gray-300 rounded-md py-2 ml-3 mr-3 mt-2 mb-2 hover:bg-gray-200 scale-95 hover:scale-x-100 transform transition duration-150 ease-out">
            <div class="flex justify-center text-lg mt-1 text-gray-700">
                Instagram Post
            </div>
            <div class="flex justify-center text-lg mt-1 text-gray-700">
                Open
            </div>
            <div class="flex justify-center text-lg mt-1 text-gray-700">
                344
            </div>
            <div class="flex flex-2 justify-center space-x-3">
                <div class="">
                   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Review</button>
                </div>
                <div class="">
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCards1
