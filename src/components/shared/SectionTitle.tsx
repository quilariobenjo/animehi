import React from 'react';

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h3 className="w-full pt-2.5 pb-4 text-lg font-semibold text-white">
      {title}
    </h3>
  );
};

export default SectionTitle;
