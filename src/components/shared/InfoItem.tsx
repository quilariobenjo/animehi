'use client';
import React from 'react';

type InfoItemProps = {
  type: string;
  content: string | React.ReactNode;
};

const InfoItem: React.FC<InfoItemProps> = ({ type, content }) => {
  return (
    <div className="mb-1 flex">
      <div className="text-xs text-[#666666]">{type} : </div>
      <div className="text-xs text-[#aaaaaa]"> {content}</div>
    </div>
  );
};

export default InfoItem;
