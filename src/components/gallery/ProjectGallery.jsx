import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useLocalized } from '../../context/AppContext';

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '8%' : '-8%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-8%' : '8%', opacity: 0 }),
};

/**
 * Reusable interactive project screenshot gallery.
 * Supports: multiple images, horizontal carousel transitions, prev/next buttons,
 * pagination dots, thumbnail navigation, mobile touch swipe, keyboard navigation,
 * and fullscreen lightbox preview.
 */
const ProjectGallery = ({
  screenshots = [],
  title = '',
  showThumbnails = true,
  aspectClass = 'aspect-[16/10]',
  compact = false,
}) => {
  const { t } = useTranslation();
  const pick = useLocalized();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const touchStartX = useRef(null);

  const total = screenshots.length;
  const safeIndex = total ? index % total : 0;
  const current = screenshots[safeIndex];

  const goTo = useCallback(
    (nextIdx) => {
      if (total <= 1) return;
      const wrapped = ((nextIdx % total) + total) % total;
      setDirection(nextIdx >= safeIndex ? 1 : -1);
      setIndex(wrapped);
    },
    [safeIndex, total],
  );

  const prev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);
  const next = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);

  // Keyboard navigation in fullscreen lightbox
  useEffect(() => {
    if (!fullscreen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setFullscreen(false);
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [fullscreen, next, prev]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null || total <= 1) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = touchStartX.current - endX;
    touchStartX.current = null;
    if (Math.abs(delta) > 42) {
      if (delta > 0) next();
      else prev();
    }
  };

  const onKeyDownInline = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  if (!total) return null;

  const caption = current?.caption ? pick(current.caption) : title;

  return (
    <div
      className="space-y-3"
      role="region"
      aria-roledescription="carousel"
      aria-label={t('gallery_label', { title })}
    >
      {/* Main viewport */}
      <div
        tabIndex={0}
        onKeyDown={onKeyDownInline}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={`group/gallery relative ${aspectClass} w-full select-none overflow-hidden rounded-2xl border border-line bg-surface-2 focus-visible:outline-2`}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={`${title} — ${caption}`}
            loading="lazy"
            decoding="async"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setFullscreen(true)}
            className="h-full w-full cursor-zoom-in object-cover"
          />
        </AnimatePresence>

        {/* Top bar: slide counter & fullscreen button */}
        <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2">
          <span className="pointer-events-auto rounded-full border border-white/15 bg-black/65 px-2.5 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-md">
            {t('gallery_counter', { current: safeIndex + 1, total })}
          </span>
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            aria-label={t('gallery_fullscreen')}
            title={t('gallery_fullscreen')}
            className="pointer-events-auto grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition-transform hover:scale-105 hover:bg-accent"
          >
            <Maximize2 size={14} aria-hidden="true" />
          </button>
        </div>

        {/* Prev / Next arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label={t('gallery_prev')}
              className="absolute start-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition-all hover:bg-accent focus-visible:opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label={t('gallery_next')}
              className="absolute end-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition-all hover:bg-accent focus-visible:opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}

        {/* Bottom caption + pagination dots */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pb-3 pt-8">
          <p className="truncate text-xs font-medium text-white/90">{caption}</p>
          {total > 1 && (
            <div className="pointer-events-auto flex shrink-0 items-center gap-1.5" role="tablist" aria-label={t('gallery_thumbs')}>
              {screenshots.map((shot, i) => (
                <button
                  key={shot.src}
                  type="button"
                  role="tab"
                  aria-selected={i === safeIndex}
                  aria-label={t('gallery_go_to', { n: i + 1 })}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === safeIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      {showThumbnails && total > 1 && (
        <div
          className={`scrollbar-none flex gap-2 overflow-x-auto pb-1 ${compact ? 'pt-0.5' : ''}`}
          role="list"
          aria-label={t('gallery_thumbs')}
        >
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={t('gallery_go_to', { n: i + 1 })}
              aria-current={i === safeIndex ? 'true' : undefined}
              className={`relative shrink-0 overflow-hidden rounded-lg border transition-all ${
                compact ? 'h-12 w-20' : 'h-16 w-28 sm:h-20 sm:w-32'
              } ${
                i === safeIndex
                  ? 'border-accent ring-2 ring-accent/40'
                  : 'border-line opacity-65 hover:opacity-100'
              }`}
            >
              <img
                src={shot.src}
                alt={shot.caption ? pick(shot.caption) : `${title} ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {fullscreen && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${title} — ${caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setFullscreen(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-black/92 p-4 backdrop-blur-xl sm:p-8"
              >
                {/* Header */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mb-4 flex w-full max-w-6xl items-center justify-between gap-4 text-white"
                >
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-semibold sm:text-lg">{title}</p>
                    <p className="truncate text-xs text-white/70">{caption}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/70">
                      {t('gallery_counter', { current: safeIndex + 1, total })}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFullscreen(false)}
                      aria-label={t('gallery_close')}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <X size={20} aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Image stage */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex w-full max-w-6xl flex-1 items-center justify-center"
                >
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                      key={current.src}
                      src={current.src}
                      alt={`${title} — ${caption}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                      className="max-h-[72vh] w-auto max-w-full rounded-2xl border border-white/15 object-contain shadow-2xl"
                    />
                  </AnimatePresence>

                  {total > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prev}
                        aria-label={t('gallery_prev')}
                        className="absolute start-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/70 text-white transition-colors hover:bg-accent sm:start-4"
                      >
                        <ChevronLeft size={22} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        aria-label={t('gallery_next')}
                        className="absolute end-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/70 text-white transition-colors hover:bg-accent sm:end-4"
                      >
                        <ChevronRight size={22} aria-hidden="true" />
                      </button>
                    </>
                  )}
                </div>

                {/* Lightbox Thumbnails */}
                {total > 1 && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="scrollbar-none mt-4 flex max-w-full gap-2.5 overflow-x-auto py-1"
                  >
                    {screenshots.map((shot, i) => (
                      <button
                        key={shot.src}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={t('gallery_go_to', { n: i + 1 })}
                        className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition-all ${
                          i === safeIndex
                            ? 'border-accent ring-2 ring-accent/60'
                            : 'border-white/20 opacity-55 hover:opacity-100'
                        }`}
                      >
                        <img src={shot.src} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
};

export default ProjectGallery;
