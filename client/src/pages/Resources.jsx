import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";

const ResourceCard = ({ title, description, tags, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        <h5 className="text-xl font-medium mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="text-gray-700 mb-4 mb-3 text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex items-center mb-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-2 py-1 mr-2 text-xs font-medium flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noreferrer noopener" className="text-indigo-500 hover:text-indigo-700">
          View Resource
        </a>
      </div>
    </div>
  );
};

function Resources() {
  const [resources, setResources] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    link: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/resource`,
      });

      setResources(response.data.resources);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: `http://localhost:8080/resource/add`,
        data: formData
      });
      setIsOpen(false);
      // Reset form data after successful submission
      setFormData({
        title: "",
        description: "",
        tags: "",
        link: ""
      });
    } catch (error) {
      console.error("Error adding resource:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Preparation Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setIsOpen}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter resource title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter resource description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">
                      Tags
                    </label>
                    <input
                      type="text"
                      id="tags"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter resource tags (comma-separated)"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",") })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="link" className="block text-gray-700 font-bold mb-2">
                      Link
                    </label>
                    <input
                      type="text"
                      id="link"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter resource link"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Add Resource
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl  p-4 py-4 px-6 rounded-full absolute flex items-center justify-center bottom-5 right-5"
        style={{ position: "fixed" }}
      >
        +
      </button>
    </div>
  );
}

export default Resources;
