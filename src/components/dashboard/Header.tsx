interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <div className="group flex items-center gap-3">
          <div
            className="
              relative flex h-11 w-11 items-center justify-center
              overflow-hidden rounded-2xl
              bg-gradient-to-br from-slate-950 to-slate-700
              text-lg shadow-lg shadow-slate-900/10
              transition-all duration-300
              group-hover:-rotate-3 group-hover:scale-105
              dark:from-white dark:to-slate-200
            "
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              💳
            </span>

            {/* Animated shine */}
            <span
              className="
                absolute inset-0 -translate-x-full
                bg-gradient-to-r from-transparent via-white/30 to-transparent
                transition-transform duration-700
                group-hover:translate-x-full
              "
            />
          </div>

          <div>
            <h1 className="text-base font-bold tracking-tight text-slate-950 dark:text-white">
              ExpenseFlow
            </h1>

            <p className="text-[11px] font-medium tracking-wide text-slate-400 dark:text-slate-500">
              PERSONAL FINANCE
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Dark mode */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
            className="
              group relative flex h-10 w-10 items-center justify-center
              overflow-hidden rounded-xl
              border border-slate-200
              bg-white text-base
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md
              active:scale-95
              dark:border-slate-700
              dark:bg-slate-900
              dark:hover:border-slate-600
            "
          >
            <span
              className={`
                absolute transition-all duration-500 ease-out
                ${
                  darkMode
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }
              `}
            >
              ☀️
            </span>

            <span
              className={`
                absolute transition-all duration-500 ease-out
                ${
                  darkMode
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }
              `}
            >
              🌙
            </span>
          </button>

          {/* Profile */}
          <button
            type="button"
            aria-label="Open profile"
            className="
              hidden h-10 w-10 items-center justify-center
              rounded-full
              bg-gradient-to-br from-slate-900 to-slate-700
              text-xs font-bold text-white
              shadow-md shadow-slate-900/10
              ring-2 ring-transparent
              transition-all duration-300
              hover:scale-105 hover:ring-slate-300
              active:scale-95
              sm:flex
              dark:from-white dark:to-slate-300
              dark:text-slate-900
              dark:hover:ring-slate-700
            "
          >
            KP
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;