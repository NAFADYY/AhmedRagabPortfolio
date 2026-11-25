import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/** Wordmark: "AR" monogram + localized name. */
const Logo = ({ onClick, className = '' }) => {
  const { t } = useTranslation();

  return (
    <Link to="/" onClick={onClick} className={`group inline-flex items-center gap-3 ${className}`} aria-label={t('logo_home_label')}>
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-fg font-display text-sm font-bold tracking-tight text-bg transition-transform duration-500 group-hover:rotate-[-6deg]">
        AR
        <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
      </span>
      <span className="hidden font-display text-[1.05rem] font-semibold tracking-tight sm:block">
        {t('display_name')}
      </span>
    </Link>
  );
};

export default Logo;
