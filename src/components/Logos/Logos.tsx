import React, { useEffect, useRef, useState } from 'react';

import RandomLogoPosition from './RandomLogoPosition';

const logoList = [
  'docker',
  'github',
  'nodejs',
  'react',
  'typescript',
  'javascript',
  'graphql',
  'postgresql',
];

export default function Logos() {
  const interval = useRef<number>();
  const [logos, setLogos] = useState<React.ReactNode[]>([]);
  const logoListRef = useRef([...logoList]);

  function getRandomLogoName() {
    if (logoListRef.current.length < 1) {
      logoListRef.current = [...logoList];
    }
    const index = Math.round(Math.random() * (logoListRef.current.length - 1));
    return logoListRef.current.splice(index, 1)[0];
  }

  useEffect(() => {
    interval.current = setInterval(() => {
      const randomLogoName = getRandomLogoName();
      const newLogo = RandomLogoPosition({ logo: randomLogoName });
      setLogos((logos) => [...logos, newLogo]);
    }, 1000);
  }, []);

  useEffect(() => {
    if (logos.length >= 30) {
      clearInterval(interval.current);
    }
  }, [logos]);

  return <>{logos}</>;
}
