import { AluminumFrame } from "./AluminumFrame";
import { Bicycle } from "./Bicycle"
import { Cogset } from "./Cogset";
import { Frame } from "./frame";
import { NineSpeed } from "./NineSpeed";
import { RoadWheel } from "./RoadWheel";
import { Wheel } from "./wheel";

export class MyBike implements Bicycle {
  public frame: Frame;
  public gears: Cogset;
  public wheel: Wheel;

  constructor() {
    this.gears = new NineSpeed;
    this.frame = new AluminumFrame();
    this.wheel = new RoadWheel();
  }
}
