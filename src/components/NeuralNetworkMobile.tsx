"use client";

import NeuralNetwork from "./NeuralNetwork";

type NeuralNetworkProps = React.ComponentProps<typeof NeuralNetwork>;

export default function NeuralNetworkMobile({
  nodeCount = 16,
  connectionDistance = 150,
  ...props
}: NeuralNetworkProps) {
  return (
    <NeuralNetwork
      {...props}
      nodeCount={nodeCount}
      connectionDistance={connectionDistance}
    />
  );
}
