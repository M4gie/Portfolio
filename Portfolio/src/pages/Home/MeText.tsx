import ReliefText from '@Src/components/Text';
import useTheme from '@Src/hooks/useTheme';
import React from 'react';

export default function MeText() {
  const { fonts } = useTheme();
  return (
    <>
      <ReliefText
        position={[-1, 0.8, -5]}
        textParams={{ size: fonts.size.xxl, height: 0.2 }}
        text="Maji">
        <meshBasicMaterial color="white" />
      </ReliefText>
      <ReliefText
        position={[-2, 0.2, -5]}
        textParams={{ size: fonts.size.md, height: 1 }}
        text="Full Stack Developer">
        <meshBasicMaterial color="white" />
      </ReliefText>
    </>
  );
}
