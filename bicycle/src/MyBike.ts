import { Pedal } from "./Pedal";
import { PlatformPedal } from "./PlatformPedal";
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
  public pedal: Pedal;
  public wheel: Wheel;

  constructor() {
    this.brakes = new DiscBrakes();
    this.frame = new AluminumFrame();
    this.pedal = new PlatformPedal();
    this.wheel = new RoadWheel();
  }
}
