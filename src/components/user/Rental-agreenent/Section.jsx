export default function Section({ title, showArrow, children }) {
    return (
      <div className="border-t border-gray-300 pt-6 mt-6">
        <div className="flex items-center gap-2 bg-green-100 p-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          {showArrow && <span>&#8592;</span>} {/* Arrow icon */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">{children}</div>
      </div>
    );
};
  