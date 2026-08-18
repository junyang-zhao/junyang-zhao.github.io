'use client';

import { motion } from 'framer-motion';

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  advisor?: string;
}

interface EducationProps {
  items: EducationItem[];
  title?: string;
}

export default function Education({
  items,
  title = 'Education',
}: EducationProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h2 className="text-2xl font-serif font-bold text-primary mb-4">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={`${item.period}-${item.institution}-${index}`}
            className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_180px_1fr_auto] items-start gap-x-4 gap-y-1"
          >
            <span className="mt-[9px] h-2.5 w-2.5 rounded-full bg-accent flex-shrink-0" />

            <div className="text-neutral-500 whitespace-nowrap">
              {item.period}
            </div>

            <div className="font-semibold text-primary">
              {item.institution}
            </div>

            <div className="text-neutral-500 md:text-right">
              {item.degree}
            </div>

            {item.advisor && (
              <div className="col-start-2 md:col-start-3 col-end-[-1] text-sm text-neutral-500 mt-1">
                <span className="font-medium text-neutral-600">Advisor:</span>{' '}
                {item.advisor}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}