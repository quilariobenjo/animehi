'use client';
import React from 'react';
import Subbed from '@/components/anime/subbed';
import Container from '@/components/shared/Container';
import Popular from '@/components/anime/popular';
import Chinese from '@/components/anime/chinese';

export default function Main() {
  return (
    <main className="mt-6">
      <div className="flex w-full flex-col justify-between md:flex-col lg:flex-row">
        <section className="w-full lg:w-[73%]">
          <Container>
            <Subbed />
            <Chinese />
          </Container>
        </section>
        <aside className="w-full px-2 md:px-4 lg:w-[27%] lg:pr-4 lg:pl-0">
          <Popular />
        </aside>
      </div>
    </main>
  );
}
