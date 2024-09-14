export default {
  logo: (
    <div className="flex items-center gap-2">
      <span className="font-bold text-2xl">Visual Gallery</span>
    </div>
  ),
  project: {
    link: "https://github.com/Crayon-ShinChan/visual-gallery",
  },
  docsRepositoryBase:
    "https://github.com/Crayon-ShinChan/visual-gallery/tree/main/",
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Visual Gallery",
    };
  },
};
