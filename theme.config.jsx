export default {
  logo: (
    <div className="flex items-center gap-2">
      <span className="font-bold text-2xl">Visual Gallery</span>
      <span className="text-xs rounded-md bg-gray-200 dark:bg-zinc-800 px-2 py-1">
        MengXi
      </span>
    </div>
  ),
  project: {
    link: "https://github.com/Crayon-ShinChan/visual-design",
  },
  // docsRepositoryBase:
  //   "https://github.com/Crayon-ShinChan/visual-design/tree/main/",
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Visual Gallery",
    };
  },
};
