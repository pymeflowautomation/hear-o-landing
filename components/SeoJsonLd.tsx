import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoJsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

const SeoJsonLd: React.FC<SeoJsonLdProps> = ({ data }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);

export default SeoJsonLd;
