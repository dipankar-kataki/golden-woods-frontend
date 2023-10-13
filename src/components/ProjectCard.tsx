import Button from "./Button";

const ProjectCard = () => {
  return (
    <article className="w-full md:w-max-[300px] bg-white rounded-xl shadow-md ">
      <img
        src="/images/loginPic.png"
        alt="golden woods building image"
        className="h-[300px] object-cover"
      />
      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between">
          <p>status</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-16 h-9 bg-gray-200 rounded-full peer dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <h2>Project Name</h2>
        <Button>Edit</Button>
      </div>
    </article>
  );
};

export default ProjectCard;
