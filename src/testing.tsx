import React from 'react';

interface Props {
  name: string;
}

const DummyComponent: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}! This is a dummy component.</div>;
};

export default DummyComponent;
