import gsap from "gsap";
export function switchByBullet(
  id: number,
  stateAction: (val: number) => void
): void {
  stateAction(id);
  gsap.to(".slider", {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      gsap.fromTo(".slider", { y: 25 }, { opacity: 1, duration: 0.5, y: 0 });
    },
  });
}
