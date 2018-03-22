import { DiscBrakes } from "./DiscBrakes";
import { Bicycle } from "./Bicycle"
import { Frame } from "./frame";
import { Wheel } from "./wheel";
import { AluminumFrame } from "./AluminumFrame";
import { RoadWheel } from "./RoadWheel";
import { Brakes } from "./Brakes";

export class MyBike implements Bicycle {
  public brakes: Brakes;
  public frame: Frame;
  public wheel: Wheel;

  constructor() {
    this.brakes = new DiscBrakes();
    this.frame = new AluminumFrame();
    this.wheel = new RoadWheel();
  }
}
