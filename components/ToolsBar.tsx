export default function ToolsBar() {
  const tools = ["Figma", "Framer", "Webflow", "Notion"];

  return (
    <section className="w-full bg-black py-6 lg:py-8 mt-8 lg:mt-0">
      <div className="flex items-center justify-center gap-8 lg:gap-28 flex-wrap px-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-base lg:text-5xl font-medium text-white font-space"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
