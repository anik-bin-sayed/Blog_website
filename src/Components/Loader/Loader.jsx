const Loader = () => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-[50vh] flex-col items-center justify-center gap-4 bg-paper"
  >
    <div className="relative h-12 w-12">
      <div className="absolute inset-0 rounded-full border-2 border-sand" />
      <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-clay" />
    </div>
    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft/60">
      Loading the journal
    </p>
  </div>
);

export default Loader;
