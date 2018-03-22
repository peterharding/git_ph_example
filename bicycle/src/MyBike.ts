import { AluminumFrame } from "./AluminumFrame";
import { DiscBrakes } from "./DiscBrakes";
import { Bicycle } from "./Bicycle"
import { Cogset } from "./Cogset";
import { Frame } from "./frame";
import { NineSpeed } from "./NineSpeed";
import { RoadWheel } from "./RoadWheel";
import { Wheel } from "./wheel";
import { Brakes } from "./Brakes";

export class MyBike implements Bicycle {
  public brakes: Brakes;
  public frame: Frame;
  public gears: Cogset;
  public wheel: Wheel;

  constructor() {
    this.gears = new NineSpeed;
    this.brakes = new DiscBrakes();
    this.frame = new AluminumFrame();
    this.wheel = new RoadWheel();
  }
}
