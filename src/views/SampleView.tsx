import { useThree } from "@react-three/fiber";
import { Text3D, useFont, View, MeshTransmissionMaterial } from "@react-three/drei";
import { PointerLighting } from "../canvas/PointerLighting";
import { Suspense } from "react";

export const SampleView = () => {

  return (
    <Suspense fallback={null}>
      {/** @ts-ignore */}
      <View className="h-full w-full">
        <PointerLighting />
        <MyText />
        <BackGroundPlane />
      </View>
    </Suspense>
  )
};

const MyText = () => {
  const viewport = useThree((state) => state.viewport);
  const font = useFont("/fonts/RussoOne.json");

  return (
    <group scale={viewport.width / 10}>
      <Text3D font={font.data} position={[-2.25, 0, 0]}>
        {"Hello!"}
        <MeshTransmissionMaterial backside backsideThickness={10} thickness={5} />
      </Text3D>
    </group>
  )
}

const BackGroundPlane = () => {

  const viewport = useThree((state) => state.viewport);

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

useFont.preload("/fonts/RussoOne.json");
