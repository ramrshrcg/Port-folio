import {XMarkIcon} from '@heroicons/react/24/outline';
import {FC, memo, useCallback, useEffect, useMemo, useState} from 'react';

import {certificates, SectionId} from '../../data/data';
import {certificateItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const getImageSrc = (image: certificateItem['image']): string =>
  typeof image === 'string' ? image : (image as {src: string}).src;

const Certificates: FC = memo(() => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose]);

  const sortedCertificates = useMemo(
    () => [...certificates].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  );

  return (
    <Section sectionId={SectionId.Certificates}>
      <div className="flex flex-col gap-y-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Certificates</h2>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {sortedCertificates.map(({date, title, content, image}, index) => (
            <button
              aria-label={`View ${title} certificate`}
              className="flex flex-col gap-y-3 rounded-xl bg-gray-800/40 p-4 text-left shadow-lg backdrop-blur-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500"
              key={`${title}-${index}`}
              onClick={() => handleOpen(index)}
              type="button">
              <div className="relative h-56 w-full overflow-hidden rounded-lg bg-white">
                <img
                  alt={title}
                  className="h-full w-full object-contain p-2"
                  loading="lazy"
                  src={getImageSrc(image)}
                />
              </div>
              <span className="text-sm font-medium text-orange-400">{date}</span>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <div className="text-lg font-light text-white">{content}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleClose}
          role="dialog">
          <button
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-gray-800/80 p-2 text-white hover:bg-gray-800"
            onClick={handleClose}
            type="button">
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="relative max-h-[90vh] w-full max-w-4xl" onClick={event => event.stopPropagation()}>
            <div className="relative h-[80vh] w-full overflow-hidden rounded-lg bg-white">
              <img
                alt={sortedCertificates[selectedIndex].title}
                className="h-full w-full object-contain"
                src={getImageSrc(sortedCertificates[selectedIndex].image)}
              />
            </div>
            <h3 className="mt-4 text-center text-xl font-bold text-white">{sortedCertificates[selectedIndex].title}</h3>
            <span className="block text-center text-sm font-medium text-orange-400">
              {sortedCertificates[selectedIndex].date}
            </span>
          </div>
        </div>
      )}
    </Section>
  );
});

Certificates.displayName = 'Certificates';
export default Certificates;