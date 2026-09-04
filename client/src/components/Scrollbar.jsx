
const Scrollbar = ({
  children,
  className = '',
  contentClassName = '',
  label = 'Scrollable content',
}) => {
  const scrollbarStyles = [
    'overflow-auto',
    '[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2',
    '[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100',
    '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2',
    '[&::-webkit-scrollbar-thumb]:border-slate-100 [&::-webkit-scrollbar-thumb]:bg-[#e91e8c]',
    '[&::-webkit-scrollbar-thumb:hover]:bg-[#c91675]',
  ].join(' ');

  return (
    <div
      aria-label={label}
      className={`${scrollbarStyles} ${className}`.trim()}
      role="region"
      tabIndex={0}
    >
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Scrollbar;
