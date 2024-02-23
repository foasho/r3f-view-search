import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { PointLight } from "three";

/**
 * A light that follows the pointer.
 */
export const PointerLighting = () => {
  const ref = useRef<PointLight>(null);

  useFrame(({ viewport, pointer }) => {
    if (ref.current) {
      // not working pointer.x and pointer.y
      // always (0, 0)
      console.log(pointer.x, pointer.y);

      ref.current.position.set(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        5.5
      );
    }
  });

  return <pointLight ref={ref} intensity={20} />;
};
