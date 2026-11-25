import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import Seo from '../../components/shared/Seo';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title="404 — Page Not Found" path="/404" noindex />
      <section className="flex min-h-[70vh] items-center justify-center py-20">
        <div className="container-x text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-accent-text">404</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            {t('nf_title')}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">{t('nf_text')}</p>
          <div className="mt-8 flex justify-center">
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>{t('nf_home')}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
