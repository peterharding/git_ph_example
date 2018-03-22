import { AluminumFrame } from "./AluminumFrame";
import { Bicycle } from "./Bicycle"
import { Frame } from "./frame";
import { RoadWheel } from "./RoadWheel";
import { Wheel } from "./wheel";

export class MyBike implements Bicycle {
  public frame: Frame;
  public wheel: Wheel;

  constructor() {
    this.frame = new AluminumFrame();
    this.wheel = new RoadWheel();
  }
}
