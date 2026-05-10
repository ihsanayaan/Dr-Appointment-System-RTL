export default function Card({ children, className = "", onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}